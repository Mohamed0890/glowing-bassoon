import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Constants } from 'expo-constants';

const firebaseConfig = {
    apiKey: "AIzaSyCPoE1B8vMlIFYHV28U_oKO4hpgeyjd6Ng",
    authDomain: "talkiewalkiebalkie.firebaseapp.com",
    projectId: "talkiewalkiebalkie",
    storageBucket: "talkiewalkiebalkie.appspot.com",
    messagingSenderId: "985795553775",
    appId: "1:985795553775:web:14e2fd63e5de7f53f76e1a"
  };

  initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const database = getFirestore();
  