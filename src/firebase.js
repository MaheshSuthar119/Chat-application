import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-app-1f474.firebaseapp.com",
  projectId: "chat-app-1f474",
  storageBucket: "chat-app-1f474.appspot.com",
  messagingSenderId: "1096528684451",
  appId: "1:1096528684451:web:f04bfe265bb6a0eb7de616"
};

 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
export { collection, addDoc, getDocs, serverTimestamp, onSnapshot };
