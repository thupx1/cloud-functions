const functions = require('firebase-functions');
const createCity = functions.https.onCall((data, ctx) => {
    try {
        console.log(data)

    } catch (error) {
        console.error(error);
        // res.json(error)
    }
})
exports.createCity = createCity