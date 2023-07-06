import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_BEKA_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_BEKA_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_BEKA_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_FIREBASE_BEKA_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_BEKA_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_BEKA_API_ID
};

const app = initializeApp(firebaseConfig);
