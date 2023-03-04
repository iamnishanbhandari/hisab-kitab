// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAox0a84XjTrEgCM4kzyNCPL_txQ02rfJY",
  authDomain: "hisab-kitab-1bbd9.firebaseapp.com",
  projectId: "hisab-kitab-1bbd9",
  storageBucket: "hisab-kitab-1bbd9.appspot.com",
  messagingSenderId: "929926158645",
  appId: "1:929926158645:web:51cc2563e99b89e16c947c",
  measurementId: "G-XE3LTMVXRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const storage = getStorage(app);
export default auth ;
