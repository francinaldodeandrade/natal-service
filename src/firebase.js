// Importar funções e objetos individuais da versão modular do Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

// Configuração do Firebase
const firebaseConfig = {
  // apiKey: "YOUR_API_KEY",
  // authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // projectId: "YOUR_PROJECT_ID",
  // storageBucket: "YOUR_PROJECT_ID.appspot.com",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  // appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID"
  apiKey: "AIzaSyBFuAslSWC-cSRkSuIpxCzO0SaTnRHWd3g",
  authDomain: "natal-service.firebaseapp.com",
  projectId: "natal-service",
  storageBucket: "natal-service.appspot.com",
  messagingSenderId: "394529064077",
  appId: "1:394529064077:web:4a01043ff219a5b9ad0ec4",
  measurementId: "G-D539NZ9X0W"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firebase Analytics
const analytics = getAnalytics(app);


// Inicializar o Firebase Storage
const db = getStorage(app);

// Inicializar o Firebase Storage
const auth = getAuth(app);
const authCreate = createUserWithEmailAndPassword(app);
const authLogin = signInWithEmailAndPassword(app);

// Inicializar o Firebase Storage
const functions = getFunctions(app);



export {
  app, 
  analytics, 
  db, 
  auth, 
  functions,
  authCreate,
  authLogin,
}
