import admin from "firebase-admin";

let serviceAccount = require("./test-a2aba-firebase-adminsdk-9jx3x-067d7b7159.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
