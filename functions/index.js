// ***************************************************************
const frontendSiteDomain = "https://registration.pdxcontra.org";
// ***************************************************************

const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);
const allowedOrigin = process.env.FUNCTIONS_EMULATOR ? "http://localhost:3000" : frontendSiteDomain;

exports.getClientSecret = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", allowedOrigin);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100, // creates temp paymentIntent that we can ignore
      currency: "usd",
    });
    res.status(200).json({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
