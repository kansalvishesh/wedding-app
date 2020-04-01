import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBqv1-bIwChNkXBLSJO17gb-WJlOYu1q8k",
    authDomain: "wedding-app-df290.firebaseapp.com",
    databaseURL: "https://wedding-app-df290.firebaseio.com",
    projectId: "wedding-app-df290",
    storageBucket: "wedding-app-df290.appspot.com",
    messagingSenderId: "155062257861",
    appId: "1:155062257861:web:0d32f87baba3e4868988ac",
    measurementId: "G-BC1FHWNKMM"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;