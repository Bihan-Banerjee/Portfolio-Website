import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDjhXFtMQJDMkGsB_gd05gPEXVaxwAwlrg",
  authDomain: "portfolio-website-559ce.firebaseapp.com",
  projectId: "portfolio-website-559ce",
  storageBucket: "portfolio-website-559ce.firebasestorage.app",
  messagingSenderId: "975254432405",
  appId: "1:975254432405:web:a9b840ce6be27281b3899c",
  measurementId: "G-XQWXV67XH6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);