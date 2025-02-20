// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtk0MMAoHhRKHy5LvZHWN_f53HD6tLH-E",
  authDomain: "to-list-40132.firebaseapp.com",
  projectId: "to-list-40132",
  storageBucket: "to-list-40132.firebasestorage.app",
  messagingSenderId: "159785341026",
  appId: "1:159785341026:web:2d73ce7a21e206dbe7413b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);