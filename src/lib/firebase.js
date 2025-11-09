import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMYkVLNxCDF5DwpRZ49OILmTaG8y8-Xv8",
  authDomain: "muro-testimonios-pyme.firebaseapp.com",
  projectId: "muro-testimonios-pyme",
  storageBucket: "muro-testimonios-pyme.firebasestorage.app",
  messagingSenderId: "216282033453",
  appId: "1:216282033453:web:ba67f2a1242ec78ab3b7a4",
  measurementId: "G-LBQ0N2H3J3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);