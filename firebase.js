// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHKrx5ojd3TlIFhRyU34-1DT22rUkxOk",
  authDomain: "facebook-clone-322f1.firebaseapp.com",
  projectId: "facebook-clone-322f1",
  storageBucket: "facebook-clone-322f1.appspot.com",
  messagingSenderId: "697962873174",
  appId: "1:697962873174:web:c3466db921535e330d56f7",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
