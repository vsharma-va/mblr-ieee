import {MongoClient} from "mongodb";
import {redirect} from "@sveltejs/kit";

const client = new MongoClient(process.env.MONGO_URL);
const userDb = client.db("User");
const eventRegistrations = userDb.collection("us_event_registrations");

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        redirect(302, '/');
    }

    const userRegistrations = await eventRegistrations.find({
        email: session.user.email,
    }, {projection: {_id: 0}}).toArray();

    let registrationIdsString = '[';

    userRegistrations.map((obj) => {
        registrationIdsString += '"' + obj.event_id + '"' + ', ';
    });

    registrationIdsString = registrationIdsString.replace(new RegExp(', ' + '$'), '') + ']';

    const queryToHygraph = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query: `
                {
                    eventCards(
                        where: {id_in: ${registrationIdsString}}
                        orderBy: isEventCompleted_ASC
                    ) {
                        eventDateTime
                        eventDescription
                        eventLocation
                        eventName
                        id
                        isEventCompleted
                        societyName
                    }
                }`
        }),
    };
    const response = await fetch(process.env.HYGRAPH_CONTENT_API, queryToHygraph);
    const json = await response.json();

    return {registrationData: userRegistrations, eventData: json.data};
}