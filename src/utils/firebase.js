// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgiwjqzUpM8boQZPLX1P0m282ZrLTubyc",
  authDomain: "moviesgpt-2023.firebaseapp.com",
  projectId: "moviesgpt-2023",
  storageBucket: "moviesgpt-2023.appspot.com",
  messagingSenderId: "90989340174",
  appId: "1:90989340174:web:6243a94cc5e5d923f37e5f",
  measurementId: "G-ZC115J5Y8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);