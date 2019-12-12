import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
  apiKey: "AIzaSyBvqcZCAZJhou0luO2JAj1esPnVl0W_Eoo",
  authDomain: "cse316-wireframer-f3fb6.firebaseapp.com",
  databaseURL: "https://cse316-wireframer-f3fb6.firebaseio.com",
  projectId: "cse316-wireframer-f3fb6",
  storageBucket: "cse316-wireframer-f3fb6.appspot.com",
  messagingSenderId: "641287524983",
  appId: "1:641287524983:web:423ce3f1f186cf1e41ec72",
  measurementId: "G-EBZQ75NJNC"
};
firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;