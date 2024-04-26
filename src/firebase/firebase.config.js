// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk1a0U_8G7BnyehJpnbiCjoqwsktKqLgI",
  authDomain: "assignment10-a34c2.firebaseapp.com",
  projectId: "assignment10-a34c2",
  storageBucket: "assignment10-a34c2.appspot.com",
  messagingSenderId: "451104930544",
  appId: "1:451104930544:web:6d9c00ad2f2cb65eb66035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
