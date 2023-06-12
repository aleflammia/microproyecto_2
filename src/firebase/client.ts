import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "apiKey": "AIzaSyCsWuo12uVyMFcQfBzFLuBfwLq_RNHM0Co",
  "authDomain": "movies-78acd.firebaseapp.com",
  "projectId": "movies-78acd",
  "storageBucket": "movies-78acd.appspot.com",
  "messagingSenderId": "139136902286",
  "appId": "1:139136902286:web:4cf2dd5d78f838a29155df",
  "measurementId": "G-4XTC0Z3J2D"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);