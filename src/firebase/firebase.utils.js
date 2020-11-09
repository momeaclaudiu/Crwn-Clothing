import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCTpVLNJn7BXOgLOPNAabaRiP4qN3Ur8DE",
   authDomain: "crwn-db-1e2ce.firebaseapp.com",
   databaseURL: "https://crwn-db-1e2ce.firebaseio.com",
   projectId: "crwn-db-1e2ce",
   storageBucket: "crwn-db-1e2ce.appspot.com",
   messagingSenderId: "829966897342",
   appId: "1:829966897342:web:581365bbbd9583b0684eef",
   measurementId: "G-JRGV9SZS7F"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({promt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

