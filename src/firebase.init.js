// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
  // apiKey: "AIzaSyATclkVuR2okmD-yVsP6HwSWQtkyDoZz18",
  // authDomain: "travel-guru-da874.firebaseapp.com",
  // projectId: "travel-guru-da874",
  // storageBucket: "travel-guru-da874.appspot.com",
  // messagingSenderId: "253225094969",
  // appId: "1:253225094969:web:b5cd9e61a4441ab161e2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;