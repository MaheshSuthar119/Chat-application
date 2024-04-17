 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_cWPqZxRIs_NUUxpEdYnAphf8g62Tx1k",
  authDomain: "chat-app-6f019.firebaseapp.com",
  projectId: "chat-app-6f019",
  storageBucket: "chat-app-6f019.appspot.com",
  messagingSenderId: "860676535986",
  appId: "1:860676535986:web:64f91da0aa586c6967bbab",
  measurementId: "G-GMCEC6E2PQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();