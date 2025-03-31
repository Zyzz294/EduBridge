// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZ7qlZzb1SuVYkuTt9RES1XJS805lZ8k",
  authDomain: "edubridg.firebaseapp.com",
  projectId: "edubridg",
  storageBucket: "edubridg.firebasestorage.app",
  messagingSenderId: "970464986046",
  appId: "1:970464986046:web:a10ffe5d2607af1dd22fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);