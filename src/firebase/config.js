import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD8cyVXLtP2dIlnkT6YHOeAK55LICdnSNQ",
  authDomain: "consultorio-app-2384b.firebaseapp.com",
  projectId: "consultorio-app-2384b",
  storageBucket: "consultorio-app-2384b.appspot.com",
  messagingSenderId: "311529256307",
  appId: "1:311529256307:web:607261aa3f10419b480106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
