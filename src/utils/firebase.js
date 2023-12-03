// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsrqHrzHDQL_R2eqNs_gDLacbSgFTeBJE",
  authDomain: "netflix-gpt-2eefb.firebaseapp.com",
  projectId: "netflix-gpt-2eefb",
  storageBucket: "netflix-gpt-2eefb.appspot.com",
  messagingSenderId: "17006928954",
  appId: "1:17006928954:web:7969e7c7fedbb6a64c0103",
  measurementId: "G-NM5WEKG5BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// firebase login
// firebase init

// firebase deploy