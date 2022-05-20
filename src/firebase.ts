//this file holds information to connect and export firestore

//import firebase
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

//set up config from db
let firebaseConfig = {
    apiKey: "AIzaSyAJAs6tNK4FHAEg4zzgZxe5fq2_W7Jy0Fo",
    authDomain: "github-user-saver-fd198.firebaseapp.com",
    projectId: "github-user-saver-fd198",
    storageBucket: "github-user-saver-fd198.appspot.com",
    messagingSenderId: "864174371592",
    appId: "1:864174371592:web:aed9687e4872e139d3b2bd"
};

//initialize firebase
initializeApp(firebaseConfig);

//initialize firestore service
const db = getFirestore();

//export the db
export default db;