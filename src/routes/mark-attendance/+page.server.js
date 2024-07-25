import {MongoClient} from "mongodb";
import {fail, redirect} from "@sveltejs/kit";

const client = new MongoClient(process.env.MONGO_URL);
const userDb = client.db("User");
const userRoles = userDb.collection('us_roles');
const userEventRegistrations = userDb.collection('us_event_registrations');

export const load = async (event) => {
    const session = await event.locals.auth();
    if(!session?.user) {
        redirect(302, '/events?error=true&details=User%20Not%20Logged%20In');
    }

    const foundUser = await userRoles.findOne({email: session.user.email});
    if(!foundUser) {
        redirect(302, '/events?error=true&details=User%20Not%20Authorised');
    }

    if(!foundUser.roles.split('&').includes('ATTD')) {
        redirect(302, '/events?error=true&details=User%20Not%20Authorised');
    }
}

export const actions = {
    markAttendance: async (event) => {
        const session = await event.locals.auth();
        if(!session?.user) {
            redirect(302, '/events?error=true&details=User%20Not%20Logged%20In');
        }

        const formData = await event.request.formData();
        const userAttdCode = formData.get('userAttdCode');

        if (userAttdCode?.toString().match(/^\d+$/) == null || userAttdCode == null || userAttdCode.toString().length !== 6) {
            return fail(400, {userAttdCodeError: 'Only integers of =6 length'});
        }

        let registration = await userEventRegistrations.findOne({join_code: Number(userAttdCode)});
        if (registration.attended) {
            return fail(400, {userAttdCodeError: 'User Already Marked'});
        }

        await userEventRegistrations.updateOne({join_code: Number(userAttdCode)}, {$set: {attended: true}})
    }
}