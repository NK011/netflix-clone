import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBl9LdiexYqRFwhhOqYq5uq54y38NeQwNE",
    authDomain: "nf-project-nitish.firebaseapp.com",
    projectId: "nf-project-nitish",
    storageBucket: "nf-project-nitish.appspot.com",
    messagingSenderId: "913412224998",
    appId: "1:913412224998:web:4673f432e5532ab6830827",
    measurementId: "G-YNQSB2W23X"
  };

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const auth = firebase.auth();
const db = app.firestore();
const rdb = firebase.database();
const G_provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, rdb, G_provider };