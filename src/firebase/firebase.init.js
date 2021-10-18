import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInit = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default firebaseInit