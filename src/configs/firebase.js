import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYQ5j9CXtmUvreOgpXYiKAm2c9-vZTW4M",
    authDomain: "csena-d4ce6.firebaseapp.com",
    projectId: "csena-d4ce6",
    storageBucket: "csena-d4ce6.appspot.com",
    messagingSenderId: "565764954317",
    appId: "1:565764954317:web:b75bb818b1b7197667b184"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}