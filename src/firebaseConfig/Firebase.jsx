import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5SuSA8pK5ba5V_pkrywr6lxZ7LVe3Oks",
  authDomain: "registros-editables-ad8a3.firebaseapp.com",
  projectId: "registros-editables-ad8a3",
  storageBucket: "registros-editables-ad8a3.appspot.com",
  messagingSenderId: "76800259957",
  appId: "1:76800259957:web:9abf3e4af6c76a0238c53c",
  measurementId: "G-WXXB7WE1JB"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
