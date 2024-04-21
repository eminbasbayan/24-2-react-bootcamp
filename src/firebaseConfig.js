import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmuKxayJh3agu-xjI-b5N0wcEtmnjTQBA",
  authDomain: "e-commerce-fd2b9.firebaseapp.com",
  projectId: "e-commerce-fd2b9",
  storageBucket: "e-commerce-fd2b9.appspot.com",
  messagingSenderId: "275155662225",
  appId: "1:275155662225:web:b511d4a67ca3fc32309630",
  measurementId: "G-GNMDHC69LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export { register, login };

export default app;
