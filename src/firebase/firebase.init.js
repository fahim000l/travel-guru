// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env_apiKey,
    authDomain: process.env_authDomain,
    projectId: process.env_projectId,
    storageBucket: process.env_storageBucket,
    messagingSenderId: process.env_messagingSenderId,
    appId: process.env_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;