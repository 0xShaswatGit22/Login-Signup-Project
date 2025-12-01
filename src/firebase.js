// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE53cwGsi82Caz28ds8VN5zFy88gCmHHQ",   // ← MUST COPY FROM FIREBASE
  authDomain: "react1-286af.firebaseapp.com",
  projectId: "react1-286af",
  storageBucket: "react1-286af.firebasestorage.app",
  messagingSenderId: "196695128890",
  appId: "1:196695128890:web:7fba35809b0d175bd62e03",
  measurementId: "G-XHFF8X6MH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Optional: Analytics
const analytics = getAnalytics(app);
