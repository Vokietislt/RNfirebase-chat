import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import Constants from 'expo-constants';
import { collection, getDocs } from 'firebase/firestore/lite';
// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL:'https://academy-462dc-default-rtdb.europe-west1.firebasedatabase.app/'
};
const Firebase = initializeApp(firebaseConfig);
export const db = getFirestore(Firebase);

export const auth = getAuth();
export const database = getFirestore();

console.log(Firebase,database)
export default Firebase;