// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6gUVsL5PeBNu8wM7G8yecpAOUwaV82dA",
    authDomain: "travel-guru-773e7.firebaseapp.com",
    projectId: "travel-guru-773e7",
    storageBucket: "travel-guru-773e7.appspot.com",
    messagingSenderId: "628580641688",
    appId: "1:628580641688:web:eb5eb9d1b6d568193fd9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;