import {fail, redirect} from "@sveltejs/kit";
import {MongoClient} from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
const userDb = client.db("User");
const registrationData = userDb.collection("us_registration_data");
const eventRegistrations = userDb.collection("us_event_registrations");

export const load = async (event) => {
    const session = await event.locals.getSession();
    const queryToHygraph = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query: `
                {
                  eventCards(orderBy: isEventCompleted_ASC) {
                    eventDateTime
                    eventDescription
                    eventName
                    id
                    societyName
                    eventLocation
                    isEventCompleted
                }
            }`
        }),
    };
    const response = await fetch(process.env.HYGRAPH_CONTENT_API, queryToHygraph);
    const json = await response.json();
    let userRegisteredEventIds = undefined;
    if (session?.user) {
        userRegisteredEventIds = await eventRegistrations.find({email: session.user.email},
            {projection: {_id: 0, event_id: 1}}).toArray();
    }
    return {eventData: json.data, userRegisteredEventIds: userRegisteredEventIds}
}

export const actions = {
    registerUser: async (event) => {
        const session = await event.locals.getSession();
        if (!session?.user) {
            return fail(400, {details: "Unauthorized!"});
        }
        const foundUser = await registrationData.findOne({email: session.user.email});
        if (!foundUser) {
            throw redirect(302, '/auth?from=events');
        }

        const formData = await event.request.formData();
        const eventId = formData.get('eventId');
        if (eventId === undefined || eventId === 'undefined' || eventId === 'null' || eventId === null) {
            return fail(422, {details: 'Invalid Event ID (input)'});
        }

        const queryToHygraph = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query: `{
                            eventCard(where: {id: "${eventId}"}){
                                id
                                eventName
                            }
                        }`
            }),
        };

        // should probably add a date check to see if the event has already happened or not but mehh.
        const response = await fetch(process.env.HYGRAPH_CONTENT_API, queryToHygraph);
        const json = await response.json();
        if (json.data.eventCard === null) {
            return fail(422, {details: 'Invalid Event ID (Tampered)'});
        }

        const existingRegistration = await eventRegistrations.findOne({
            email: session.user.email,
            event_id: json.data.eventCard.id
        });
        if (existingRegistration) {
            return fail(409, {details: 'User already exists!'});
        }

        await eventRegistrations.insertOne({
            email: session.user.email,
            event_id: json.data.eventCard.id,
            event_name: json.data.eventCard.eventName,
            date_timestamp: new Date(),
        });
        return {details: 'User Registered!'};
    }
}