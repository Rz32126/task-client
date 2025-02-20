// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsCmxJ84WLN3s4hXNXM6m3FirrjUy7A2k",
  authDomain: "task-management-2f52d.firebaseapp.com",
  projectId: "task-management-2f52d",
  storageBucket: "task-management-2f52d.firebasestorage.app",
  messagingSenderId: "690111404851",
  appId: "1:690111404851:web:b4e006a04f598f36c73c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;