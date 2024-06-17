import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWVLfdM0vQmhPVG4q5vsMliv_WzOcliN8",
    authDomain: "vacinabauru-c22b9.firebaseapp.com",
    projectId: "vacinabauru-c22b9",
    storageBucket: "vacinabauru-c22b9.appspot.com",
    messagingSenderId: "156449580519",
    appId: "1:156449580519:web:ba4017ef9202af90aa0942",
    measurementId: "G-TCFGV5PFZ9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Opcional, apenas necessário se estiver usando Firebase Analytics
const db = getFirestore(app); // Inicializa o Firestore

export { db };
