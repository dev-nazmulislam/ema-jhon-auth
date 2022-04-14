// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQhNa1-v41PVjfLctoAyGsp92CW56P-c",
  authDomain: "ema-jhon-projects.firebaseapp.com",
  projectId: "ema-jhon-projects",
  storageBucket: "ema-jhon-projects.appspot.com",
  messagingSenderId: "6220870831",
  appId: "1:6220870831:web:b2c1fa8ed4a8b8890d505a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
