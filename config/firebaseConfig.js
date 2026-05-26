
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2dDUfQMou9SSu0kXNfczHkmDLweHBp4g",
  authDomain: "interior-ai-2989c.firebaseapp.com",
  projectId: "interior-ai-2989c",
  storageBucket: "interior-ai-2989c.firebasestorage.app",
  messagingSenderId: "185119734702",
  appId: "1:185119734702:web:ea9cbaa68a9c1d62be663f",
  measurementId: "G-4CV32C9ZY9"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);