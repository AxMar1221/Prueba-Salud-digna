import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGq3me5g_Q0tbkNkDcZqzz-05KlsbUzLU",
  authDomain: "registros-75709.firebaseapp.com",
  projectId: "registros-75709",
  storageBucket: "registros-75709.appspot.com",
  messagingSenderId: "409646002892",
  appId: "1:409646002892:web:b60b08b421f1a6388f0869",
  measurementId: "G-LGZK042NFG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
