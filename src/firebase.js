    import firebase from 'firebase/app';
    import 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and     later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB5xwLWhXvFrdqTda1JMEo9TfgxOU42q7I",
    authDomain: "reactcrud-331f1.firebaseapp.com",
    projectId: "reactcrud-331f1",
    storageBucket: "reactcrud-331f1.appspot.com",
    messagingSenderId: "733036332729",
    appId: "1:733036332729:web:0acc9e197f6b8ad6c0fd68",
    measurementId: "G-LNL63TEXMM"
  };
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  export const database = firebaseapp.firestore();

