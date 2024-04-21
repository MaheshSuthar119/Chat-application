import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyC_Yp4gy2U0Nutx8ubg-8E9P0eaAEjEAaM",
  authDomain: "chat-app-1f474.firebaseapp.com",
  projectId: "chat-app-1f474",
  storageBucket: "chat-app-1f474.appspot.com",
  messagingSenderId: "1096528684451",
  appId: "1:1096528684451:web:f04bfe265bb6a0eb7de616"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;