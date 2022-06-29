
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBhIj6tap9c7zkRpl03L1LY1hHcQsx5gA",
  authDomain: "recetas-time.firebaseapp.com",
  databaseURL: "https://recetas-time-default-rtdb.firebaseio.com",
  projectId: "recetas-time",
  storageBucket: "recetas-time.appspot.com",
  messagingSenderId: "558906795041",
  appId: "1:558906795041:web:b288f5bfb199cd7138ef60",
  measurementId: "G-YBBBLXLE3S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


