// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "srs3totl3ij8dhvwfjh03hw5m6o6dcgl582bb81pyvbrgiem",
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

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage= getStorage(app);

export {fireDb,auth,storage}