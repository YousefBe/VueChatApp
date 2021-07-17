import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyCZilStUqjmMz9IIFLIih2-vWjULgQhnps",
    authDomain: "livechat-1c556.firebaseapp.com",
    projectId: "livechat-1c556",
    storageBucket: "livechat-1c556.appspot.com",
    messagingSenderId: "663422686219",
    appId: "1:663422686219:web:d1ad9a2353c3fe29e6e30e"
  };

  const projectAuth = firebase.auth();
  firebase.initializeApp(firebaseConfig);
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore , timeStamp , projectAuth}