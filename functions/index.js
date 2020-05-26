const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const stripe = require('stripe')('sk_test_pYARs4dfsy3tc8RQL5HYw1Ok00tyDYzdml');

exports.completePaymentWithStripe = functions.https.onRequest(
  (request, response) => {
    stripe.charges
      .create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: 'tok_mastercard',
      })
      //eslint-disable-next-line
      .then(charge => {
        response.send(charge);
      })
      .catch(error => {
        console.log(error);
      });
  },
);
