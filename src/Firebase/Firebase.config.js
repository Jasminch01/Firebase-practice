
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5JTXjU-W-cOd1ifHcqrnMcxs8_j0f8tE",
  authDomain: "fir-practice-6d932.firebaseapp.com",
  projectId: "fir-practice-6d932",
  storageBucket: "fir-practice-6d932.appspot.com",
  messagingSenderId: "765161315336",
  appId: "1:765161315336:web:2f3ca7cc3cd1354c5885bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;