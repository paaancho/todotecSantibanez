// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJ3pand64YJ27QZO_DLmOs4JLlu_79T-U",
    authDomain: "proyecto-coderhouse-reactjs.firebaseapp.com",
    projectId: "proyecto-coderhouse-reactjs",
    storageBucket: "proyecto-coderhouse-reactjs.appspot.com",
    messagingSenderId: "118565620142",
    appId: "1:118565620142:web:6f14a0a00dfc8b7966203f",
    measurementId: "G-3H05Z5NLHC"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export {getFirestore};