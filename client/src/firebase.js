// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ed620.firebaseapp.com",
  projectId: "mern-blog-ed620",
  storageBucket: "mern-blog-ed620.appspot.com",
  messagingSenderId: "794319416449",
  appId: "1:794319416449:web:11807c317410168a32f180",
  measurementId: "G-Z7WC2HQFGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
