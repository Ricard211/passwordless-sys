import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKO3BQadNqb9ik2wZNlrFmIFJu7nD4ju8",
  authDomain: "labwork-passwordless.firebaseapp.com",
  projectId: "labwork-passwordless",
  storageBucket: "labwork-passwordless.appspot.com",
  messagingSenderId: "899742027311",
  appId: "1:899742027311:web:6725cd0faa6fdabb3cc0da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
