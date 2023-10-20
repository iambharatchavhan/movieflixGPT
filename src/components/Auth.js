// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZaxbWfj1Ri4gU8Rw4aKxbXmtv6AQ8kcA",
  authDomain: "netflixgpt-abff7.firebaseapp.com",
  projectId: "netflixgpt-abff7",
  storageBucket: "netflixgpt-abff7.appspot.com",
  messagingSenderId: "1074123708652",
  appId: "1:1074123708652:web:c56f9eaa36da3dc0c8edc9",
  measurementId: "G-RPBD77DWDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);