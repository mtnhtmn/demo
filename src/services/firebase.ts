import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBT6ok2qz8iOy7Hwyiu2Iwp-xVkRsarxkU",
    authDomain: "tv-shows-3490b.firebaseapp.com",
    projectId: "tv-shows-3490b",
    storageBucket: "tv-shows-3490b.appspot.com",
    messagingSenderId: "437969784744",
    appId: "1:437969784744:web:7851856c5bcdab9da1179d",
    measurementId: "G-GKLM5T3P4B"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


