import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6ceRyRAtl0yVkWzSillSHn7GNn0g9mpw",
  authDomain: "goaly-afd06.firebaseapp.com",
  projectId: "goaly-afd06",
  storageBucket: "goaly-afd06.appspot.com",
  messagingSenderId: "159028241791",
  appId: "1:159028241791:web:ffad9b7a64f9804a2de64a",
  measurementId: "G-228SBB05EE",
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firebase, firestore };
