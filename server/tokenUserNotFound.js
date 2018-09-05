const UserModel = require('../../../models/user');

const testData = {
    id: "test-user",
    username: "Test User",
    lowercaseUsername: "test user",
    // roles: [],
    // profiles: []
}
//
// user = new User({
//     username,
//     lowercaseUsername: username.toLowerCase(),
//     profiles: [{ id, provider }],
//     status: {
//         username: {
//             status: 'UNSET',
//             history: {
//                 status: 'UNSET',
//             },
//         },
//     },
// });

var tokenUserNotFound = async ({jwt, token}) => {
    console.log("tokenUserNotFound called");
    console.log({ jwt, token });
    let profile = {
        id: jwt.sub,
        username: jwt.name,
        lowercaseUsername: jwt.name.toLowerCase(),
        roles: [],
        "profiles" : [
            {
                "id" : jwt.email,
                "provider" : "local",
                "metadata" : {
                    "confirmed_at" : new Date()
                }
            }
        ],
        status: {
            username: {
                status: 'SET',
                history: {
                    status: 'UNSET',
                },
            },
        }
    };
    if (!profile) return null;
    if (!profile.id) return null;
    let user = await UserModel.findOneAndUpdate({
        id: profile.id
    }, profile, {
        setDefaultsOnInsert: true,
        new: true,
        upsert: true
    });
    return user;
}

module.exports = { tokenUserNotFound };
