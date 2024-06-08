import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJEqy6ds38FuXzZo-K_x_K1HkqIAyfYjU",
  authDomain: "registros-editables-62ff5.firebaseapp.com",
  projectId: "registros-editables-62ff5",
  storageBucket: "registros-editables-62ff5.appspot.com",
  messagingSenderId: "576797223156",
  appId: "1:576797223156:web:2ca31ea96434b753f7d6a1",
  measurementId: "G-5SWYJP7XTM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
