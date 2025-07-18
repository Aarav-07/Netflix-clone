import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAkf0okf4lhdiJmCx1qnp5qYzdufQJdaKo",
  authDomain: "netflix-clone-a2c36.firebaseapp.com",
  projectId: "netflix-clone-a2c36",
  storageBucket: "netflix-clone-a2c36.firebasestorage.app",
  messagingSenderId: "625635673388",
  appId: "1:625635673388:web:22ae86ab3f9ac377f5d889",
  measurementId: "G-PT533YKRLS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Format Firebase error messages
const handleFirebaseError = (error) => {
  if (error.code) {
    const formatted = error.code.split('/')[1].split('-').join(' ');
    toast.error(formatted);
  } else {
    toast.error("An unknown error occurred");
  }
};

// ✅ Signup Function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    return user;
  } catch (error) {
    handleFirebaseError(error);
    throw error;
  }
};

// ✅ Login Function
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    handleFirebaseError(error);
    throw error;
  }
};

// ✅ Logout Function
const logout = () => signOut(auth);

export { auth, db, login, signup, logout };

