import {MongoClient} from "mongodb";
import {fail, redirect} from "@sveltejs/kit";

const client = new MongoClient(process.env.MONGO_URL);
const userDb = client.db("User");
const registrationData = userDb.collection("us_registration_data");

export const load = async (event) => {
    const session = await event.locals.getSession();

    if (!session?.user) {
        throw redirect(302, '/?notSignedIn');
    }

    const foundUser = await registrationData.findOne({
        'email': session.user.email,
    });
    const from = event.url.searchParams.get('from');
    if (foundUser) {
        if (!from) {
            throw redirect(302, '/');
        } else {
            throw redirect(302, `/${from.replace('-', '/')}`);
        }
    } else {
        return {from: from};
    }
}

export const actions = {
    registerUser: async (event) => {
        const session = await event.locals.getSession();
        const formData = await event.request.formData();
        const userName = formData.get('userName');
        const userYear = formData.get('userYear');
        const userBranch = formData.get('userBranch');
        const from = formData.get('from');
        const serverFormError = {userNameError: '', userYearError: '', userBranchError: ''};

        if (userName?.match(/^[a-zA-Z\- ]+$/) == null || userName === 'null' || userName === null || userName === undefined || userName === 'undefined') {
            serverFormError.userNameError = 'Only alphabets are allowed!';
        }

        if (userYear?.match(/^\d+$/) == null || userYear == null || userYear === 'null' || userYear === undefined || userYear === 'undefined') {
            serverFormError.userYearError = 'Only numbers are allowed!';
        } else {
            if (Number(userYear) > 4 || Number(userYear) <= 0) {
                serverFormError.userYearError = 'Invalid year';
            }
        }

        if (userBranch == null || userBranch === 'null' || userBranch === undefined || userBranch === 'undefined') {
            serverFormError.userBranchError = 'Invalid branch';
        }

        if (!Object.values(serverFormError).every(x => x === null || x === '')) {
            console.log('errorFound');
            return fail(400, serverFormError);
        }

        // all inputs are valid
        await registrationData.insertOne({
            email: session.user.email,
            user_name: userName,
            user_year: Number(userYear),
            user_branch: userBranch,
        });
        return {goto: from.replace('-', '/')};
    }
}