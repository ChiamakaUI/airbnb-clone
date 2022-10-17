// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, } from "firebase/database"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "airbnb-clone-7a9bd.firebaseapp.com",
  projectId: "airbnb-clone-7a9bd",
  databaseURL: "https://airbnb-clone-7a9bd-default-rtdb.firebaseio.com",
  storageBucket: "airbnb-clone-7a9bd.appspot.com",
  messagingSenderId: "49425484924",
  appId: "1:49425484924:web:b35518bc9d5445ed888df9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const database = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

