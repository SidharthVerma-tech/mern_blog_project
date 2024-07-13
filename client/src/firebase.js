import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "new-project-21d64.firebaseapp.com",
  projectId: "new-project-21d64",
  storageBucket: "new-project-21d64.appspot.com",
  messagingSenderId: "178890013491",
  appId: "1:178890013491:web:6f0934473ccc76d6941c46"
};

export const app = initializeApp(firebaseConfig);
