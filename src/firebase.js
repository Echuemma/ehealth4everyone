// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATEz4KUBgO2zV0PSCigjKH8F4HSLhiCLI",
  authDomain: "vuejs-test-7cdf6.firebaseapp.com",
  projectId: "vuejs-test-7cdf6",
  storageBucket: "vuejs-test-7cdf6.appspot.com",
  messagingSenderId: "370638520723",
  appId: "1:370638520723:web:9aeded7593c7acc4fb6866",
  measurementId: "G-GH08S8B2TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
