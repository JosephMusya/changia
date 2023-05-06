import { initializeApp, } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import {getFireStore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYEJTCF_6DAqDgQxJFFN_f5fJGFxpM8Cs",
    authDomain: "changia-eda5e.firebaseapp.com",
    projectId: "changia-eda5e",
    storageBucket: "changia-eda5e.appspot.com",
    messagingSenderId: "501814776279",
    appId: "1:501814776279:web:ae65de29796d68e30fbb92",
    measurementId: "G-NRM7JLY8D1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const db = getFireStore(app);
