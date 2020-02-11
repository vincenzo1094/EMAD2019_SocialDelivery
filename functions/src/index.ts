import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp({
    databaseURL: "https://socialdelapp.firebaseio.com",
    projectId: "socialdelapp",
    storageBucket: "socialdelapp.appspot.com",
  });

exports.newSubscriberNotificationClient = functions.firestore
    .document('clienti/{UserId}')
    .onUpdate(event =>{
      //console.log(event.after.data());
      const clienteAfter = event.after.data();
      const clientBefore = event.before.data();
      const ordineAfter:[] = clienteAfter!.ordini;
      const ordineBefore:[] = clientBefore!.ordini;
      const payload = {
        notification: {
          title: 'Ordine',
          body: `Il tuo ordine è stato preso in consegna`,
          icon: 'https://goo.gl/Fz9nrQ'
        }
      }

      const tokens: any = [];

      if(ordineAfter!==null && ordineAfter.length == ordineBefore.length){
         for (let index = 0; index < ordineAfter.length; index++) {
            if(ordineBefore[index]['stato'] == 2 && ordineAfter[index]['stato'] == 0)
               tokens.push(clienteAfter!.token);
        }
      }

      return admin.messaging().sendToDevice(tokens, payload);      
    });
    
exports.newSubscriberNotification = functions.firestore
    .document('ordini/{UserId}')
    .onCreate(async event => {
        //console.log(event.data);

    // Notification content
    const payload = {
      notification: {
        title: 'Nuovo Ordine',
        body: `Accedi all'app per aggiudicarti la spedizione`,
        icon: 'https://goo.gl/Fz9nrQ'
      }
    }

    // ref to the device collection for the user
    const db = admin.firestore()
    const devicesRef = db.collection('drivers')


    // get the user's tokens and send notifications
    const devices = await devicesRef.get();

    const tokens: any = [];

    // send a notification to each device token
    devices.forEach(result => {
      const token = result.data().token;
        console.log(result.data());
        console.log(token);
        if(token!=null)
            tokens.push( token )
    })

    return admin.messaging().sendToDevice(tokens, payload)

});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
