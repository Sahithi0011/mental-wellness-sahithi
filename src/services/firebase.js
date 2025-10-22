
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAKHdEK5djlWb72TCVlTxUH_X5oyY80Un8",
  authDomain: "mental-wellness-journal-69145.firebaseapp.com",
  projectId: "mental-wellness-journal-69145",
  storageBucket: "mental-wellness-journal-69145.firebasestorage.app",
  messagingSenderId: "206751818241",
  appId: "1:206751818241:web:c7bd3b6e9bec6bf9e25600"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export {db}