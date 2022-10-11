
import { initializeApp, credential as _credential } from "firebase-admin";
import firebase from 'firebase-admin';


import serviceAccount from "./serviceAccountKey.json";



initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: "https://projectcrm-f4e5f-default-rtdb..firebaseio.com",
});