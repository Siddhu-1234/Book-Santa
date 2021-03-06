import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDkNurElmPTfoSXoGRCDv5ecyfhyT2SFVg",
    authDomain: "book-santa1.firebaseapp.com",
    projectId: "book-santa1",
    storageBucket: "book-santa1.appspot.com",
    messagingSenderId: "769251510174",
    appId: "1:769251510174:web:6f102ee22d01958663b88f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();