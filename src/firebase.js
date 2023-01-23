// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJbnnYYEGYSeLTWWa5Bu46t0omJ9QqCCk",
  authDomain: "datovuefinals-poemhub.firebaseapp.com",
  databaseURL: "https://datovuefinals-poemhub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datovuefinals-poemhub",
  storageBucket: "datovuefinals-poemhub.appspot.com",
  messagingSenderId: "679948336949",
  appId: "1:679948336949:web:bca3ad43282579f40d967c",
  measurementId: "G-6K1PM67TPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const poemsColRef = collection(db, "poems");
export default poemsColRef;

export { db }