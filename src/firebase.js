import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuj8TZyD0VtMshI1089fCVrdTZRqclPNk",
    authDomain: "linkedin-clone-8f254.firebaseapp.com",
    projectId: "linkedin-clone-8f254",
    storageBucket: "linkedin-clone-8f254.appspot.com",
    messagingSenderId: "538450194327",
    appId: "1:538450194327:web:fbeb452e0424d4f2c71ed2",
    measurementId: "G-LJ15BK70R9"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig)
   const db = firebaseApp.firestore()
   const auth = firebase.auth()

   export { db, auth };