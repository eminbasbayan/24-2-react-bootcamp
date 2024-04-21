import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmuKxayJh3agu-xjI-b5N0wcEtmnjTQBA",
  authDomain: "e-commerce-fd2b9.firebaseapp.com",
  projectId: "e-commerce-fd2b9",
  storageBucket: "e-commerce-fd2b9.appspot.com",
  messagingSenderId: "275155662225",
  appId: "1:275155662225:web:b511d4a67ca3fc32309630",
  measurementId: "G-GNMDHC69LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;