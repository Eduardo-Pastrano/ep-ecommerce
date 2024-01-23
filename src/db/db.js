import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBveXzL_pHnvaCjATtzKybqeNmaxDNE7r4",
    authDomain: "ecommerce-reactjs-49930-ch.firebaseapp.com",
    projectId: "ecommerce-reactjs-49930-ch",
    storageBucket: "ecommerce-reactjs-49930-ch.appspot.com",
    messagingSenderId: "838505210247",
    appId: "1:838505210247:web:f11a0c2d7d840db943f322"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;