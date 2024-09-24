import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDcL7Ipe4h4pMyMIxRT4QYfCBRw7a_ri0s",
    authDomain: "linkedin-clone-9d32e.firebaseapp.com",
    projectId: "linkedin-clone-9d32e",
    storageBucket: "linkedin-clone-9d32e.appspot.com",
    messagingSenderId: "802266259682",
    appId: "1:802266259682:web:510fe16c0fd3059dc8bebb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;