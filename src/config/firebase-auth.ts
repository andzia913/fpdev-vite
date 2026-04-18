import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuSgU4ePichZVa42pU8v0X4L-Okeol9AY",
  authDomain: "fpdevelopment-7e80b.firebaseapp.com",
  projectId: "fpdevelopment-7e80b",
  storageBucket: "fpdevelopment-7e80b.firebasestorage.app",
  messagingSenderId: "757251196416",
  appId: "1:757251196416:web:67963d75748520a164bae5",
  measurementId: "G-SQXQC19SY1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);