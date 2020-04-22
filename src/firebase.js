import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-firestore'
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
  
  
  class Firebase { //not a react component class but utility class to use
    constructor () {
      // Initialize Firebase
     app.initializeApp(config) 
     this.auth = app.auth() //this will give us the reference of auth api
     this.db = app.firestore() //will give us access to cloud firestore
    }

    login(email, password){
      return this.auth.signInWithEmailAndPassword(email, password) //this return us a promise which we can resolve later on an error code
    }

    logout() {
      return this.auth.signOut()
    }

    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      //create user with email and password
      return this.auth.currentUser.updateProfile({
        //want to update the profile which have the correct name by saving the display name
        //which will be done in usercomponent
        displayName: name
      })
    }

    addQuote(quote) {
      if(!this.auth.currentUser){
        return alert('Not authorized')
      }

      return this.db.doc(`user_codedamn_video/${this.auth.currentUser.uid}`).set({
        quote
      })
    }

    isInitialized() {
      return new Promise(resolve => { //so we can access to the information that there was some authentication data involve
        this.auth.onAuthStateChanged(resolve)
      })
    }

    getCurrentUsername() { 
      return this.auth.currentUser && this.auth.currentUser.displayName //it's what we will register right here it's from what we registered in the begining
      //from line 41 and also need to check from previous line that this user is the current user or not at &&
    }

    async getCurrentUserQuote() {
      const quote = await this.db.doc(`user_codedamn_video/${this.auth.currentUser.uid}`).get()
      return quote.get('quote') //so it's how we did store the particular quote
    }
   
     
    
}

export default new Firebase() // cus it will allow us to access everything in the class with the constructor initialize as well  