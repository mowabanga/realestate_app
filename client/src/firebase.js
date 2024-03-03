// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-23fb4.firebaseapp.com",
  projectId: "mern-estate-23fb4",
  storageBucket: "mern-estate-23fb4.appspot.com",
  messagingSenderId: "932251054355",
  appId: "1:932251054355:web:24e663dcd4c65dfcc9eae6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
