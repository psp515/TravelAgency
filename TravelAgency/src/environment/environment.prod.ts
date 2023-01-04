// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl8iCTdY8YBWLNLXOSfJ8o9_NhVrj4744",
  authDomain: "travelagency-e6774.firebaseapp.com",
  databaseURL: "https://travelagency-e6774-default-rtdb.firebaseio.com",
  projectId: "travelagency-e6774",
  storageBucket: "travelagency-e6774.appspot.com",
  messagingSenderId: "159458149633",
  appId: "1:159458149633:web:1256a084204d9834104700",
  measurementId: "G-3VS2DXKJCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


