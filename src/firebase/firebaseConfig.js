
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "tienda-fotos-aragon.firebaseapp.com",
  projectId: "tienda-fotos-aragon",
  storageBucket: "tienda-fotos-aragon.appspot.com",
  messagingSenderId: "499065821028",
  appId: "1:499065821028:web:769f8817b539b8eea40c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);