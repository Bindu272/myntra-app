import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6P0-d6OwwaUBeGh-4tD8Jd2Q5uRcMWs",
  authDomain: "myntra-c6163.firebaseapp.com",
  projectId: "myntra-c6163",
  storageBucket: "myntra-c6163.appspot.com",
  messagingSenderId: "890462182434",
  appId: "1:890462182434:web:de2c596465d7ae9f9ffe7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();