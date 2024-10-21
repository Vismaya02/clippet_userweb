import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwSgVU8bl4UsQ1m6b28yywiXlSxM9b2DM",
  authDomain: "otp-sign-in-a12ca.firebaseapp.com",
  projectId: "otp-sign-in-a12ca",
  storageBucket: "otp-sign-in-a12ca.appspot.com",
  messagingSenderId: "1038408032183",
  appId: "1:1038408032183:web:c55e652a4ed92c39061232",
  measurementId: "G-TL0CMKGV23",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
