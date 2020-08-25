const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.createCity = functions.https.onRequest(async (req, res) => {
  const cityRef = admin.firestore().collection(`cities`)
  const result = await cityRef.add({ data: req.body })
  console.log("cities", result.id)
  res.json(await result.get())
});
    try {
        console.log(data)

    } catch (error) {
        console.error(error);
        // res.json(error)
    }
})
exports.createCity = createCity