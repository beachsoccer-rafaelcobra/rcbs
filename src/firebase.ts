import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHcKM6l-E2B8c_Cy0vKv1iNS_Jt_aGGD8",
  authDomain: "bsrc-jogadores.firebaseapp.com",
  projectId: "bsrc-jogadores",
  storageBucket: "bsrc-jogadores.firebasestorage.app",
  messagingSenderId: "370386584997",
  appId: "1:370386584997:web:625b5b5ae0edb021e8d44c",
  measurementId: "G-5KKN549WX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
