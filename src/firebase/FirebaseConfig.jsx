// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2AvFk05pk_QzsOpYTGVEcDmGbgPBdbog",
  authDomain: "vib3-firebase.firebaseapp.com",
  projectId: "vib3-firebase",
  storageBucket: "vib3-firebase.appspot.com",
  messagingSenderId: "65515204043",
  appId: "1:65515204043:web:387eb8ca467138073f1a4e",
  measurementId: "G-JXD953JB50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);