import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbWUwvwS9p4Zn4L6d68MXxocRmM2yeHj4",
  authDomain: "project-system-cc6e4.firebaseapp.com",
  projectId: "project-system-cc6e4",
  storageBucket: "project-system-cc6e4.appspot.com",
  messagingSenderId: "427164269241",
  appId: "1:427164269241:web:bbee426b4a46fb61fdf968"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}