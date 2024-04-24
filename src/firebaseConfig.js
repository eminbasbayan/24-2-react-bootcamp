import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

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
const db = getFirestore(app);

const register = async (email, password, role = "user") => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Firestore veritabanına kullanıcı bilgilerini kaydet
    const userDoc = doc(db, "users", user.uid);
    await setDoc(userDoc, {
      email: email,
      role: role,
    });

    console.log("User registered with role:", role);
    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
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

export { register, login, auth, db };

export default app;
