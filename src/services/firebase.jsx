import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0pLjKAhRYC4m1Oiab3ws_2jOjN1yNZhQ",
  authDomain: "sakuraapp-1e7ee.firebaseapp.com",
  projectId: "sakuraapp-1e7ee",
  storageBucket: "sakuraapp-1e7ee.firebasestorage.app",
  messagingSenderId: "270374024348",
  appId: "1:270374024348:web:dec989494d11fa244ea959"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)