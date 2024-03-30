// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVe2rGDLH1lzwO62Du-i6d3QlyiJvICg",
  authDomain: "netflix-gpt-37c72.firebaseapp.com",
  projectId: "netflix-gpt-37c72",
  storageBucket: "netflix-gpt-37c72.appspot.com",
  messagingSenderId: "582004785587",
  appId: "1:582004785587:web:36285411639ff362ea0bc6",
  measurementId: "G-6FQ25901EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();