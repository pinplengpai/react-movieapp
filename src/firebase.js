import { firebase } from 'firebase/app'
import 'firebase/auth'//Firebase Authentication.
import 'firebase/firestore' //The Cloud Firestore Database.


  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyBhNlAamlFiMO4gReV_nYs9EQnWt10pqE4",
    authDomain: "movie-app-65e1e.firebaseapp.com",
    databaseURL: "https://movie-app-65e1e.firebaseio.com",
    projectId: "movie-app-65e1e",
    storageBucket: "movie-app-65e1e.appspot.com",
    messagingSenderId: "542115104809",
    appId: "1:542115104809:web:eb739398427dd031cef438",
    measurementId: "G-8K75712XW8"
  };
  //   firebase.analytics();
  
  firebase.initializeApp(config);

export default firebase // cus it will allow us to access everything in the class with the constructor initialize as well  
