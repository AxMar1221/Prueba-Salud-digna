import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCifbzB2BIsG30Ik3_wxf8docx5Q7ftZho",
  authDomain: "registros-editables.firebaseapp.com",
  projectId: "registros-editables",
  storageBucket: "registros-editables.appspot.com",
  messagingSenderId: "966202669927",
  appId: "1:966202669927:web:35bc609c2a6592af694dc2",
  measurementId: "G-CG7DHQ6LHB"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)