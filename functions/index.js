const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.createCity = functions.https.onRequest(async (req, res) => {
  const cityRef = admin.firestore().collection(`cities`)
  const result = await cityRef.add({ data: req.body })
  console.log("cities", result.id)
  res.json(await result.get())
});

exports.handleCreate = functions.firestore
  .document(`cities/{cityId}`)
  .onCreate(async (snapshot, ctx) => {
    try {
      const original = snapshot.data()
      functions.logger.log('Creating', original)

    } catch (error) {
      console.error(error)
      return;
    }
  });
exports.handleUpdate = functions.firestore
  .document('cities/{cityId}')
  .onUpdate((change, ctx) => {
    console.log('updating');
  })

exports.handleDelete = functions.firestore
  .document('cities/{cityId}')
  .onDelete((snap, ctx) => {
    console.log('deleting');
  })