// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATlEMfCtejks9hxxuKpSzlgxutRwxPdAM",
  authDomain: "clone-4e809.firebaseapp.com",
  projectId: "clone-4e809",
  storageBucket: "clone-4e809.appspot.com",
  messagingSenderId: "555290420365",
  appId: "1:555290420365:web:989caa0a8701a96b62eec4",
  measurementId: "G-HBXC5JJV6T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };