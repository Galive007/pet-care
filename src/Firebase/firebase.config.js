// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9p2JtQV9uSsTpAedvf7-dxO0XGzRBg38",
  authDomain: "pet-care-auth-aa84a.firebaseapp.com",
  projectId: "pet-care-auth-aa84a",
  storageBucket: "pet-care-auth-aa84a.firebasestorage.app",
  messagingSenderId: "563691190513",
  appId: "1:563691190513:web:abd26ab15d0a4b4bb2d150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;