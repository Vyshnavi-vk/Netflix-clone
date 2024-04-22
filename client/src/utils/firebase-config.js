import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCu0TrehAe0zqiGYTJikUiDicT6XDgtakM",
    authDomain: "react-netlix-clone-a0243.firebaseapp.com",
    projectId: "react-netlix-clone-a0243",
    storageBucket: "react-netlix-clone-a0243.appspot.com",
    messagingSenderId: "527777367394",
    appId: "1:527777367394:web:4b67c428206e3c54e5583b",
    measurementId: "G-6T71GJEFBL"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)