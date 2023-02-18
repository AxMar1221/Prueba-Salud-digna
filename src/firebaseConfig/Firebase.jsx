import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFlNa6cqdyD06MWgQI_BavsQF_tm47x4A",
  authDomain: "formulario-sd.firebaseapp.com",
  projectId: "formulario-sd",
  storageBucket: "formulario-sd.appspot.com",
  messagingSenderId: "313655400887",
  appId: "1:313655400887:web:ecfc1627ba98307048f032",
  measurementId: "G-K352TWDBEQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)