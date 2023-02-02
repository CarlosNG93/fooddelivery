import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD9PemSKRHoN6bLZZmn9uWhltX9jKvCi-4",
	authDomain: "fooddelivery-836c8.firebaseapp.com",
	databaseURL: "https://fooddelivery-836c8-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "fooddelivery-836c8",
	storageBucket: "fooddelivery-836c8.appspot.com",
	messagingSenderId: "1070407823718",
	appId: "1:1070407823718:web:339782715f64ba510718a7"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
  
export { app, firestore, storage };