import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBWydVueG7UBwkRKIxyXtvc9e7QMB3A4os",
  authDomain: "c71-d0bdc.firebaseapp.com",
  projectId: "c71-d0bdc",
  storageBucket: "c71-d0bdc.appspot.com",
  messagingSenderId: "8507987860",
  appId: "1:8507987860:web:3e0d5d6146cb438dd3e181"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
