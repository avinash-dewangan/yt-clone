import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-3PffFfiREfoWgNHkn2MNW0aTNB_YpAw",
    authDomain: "clone-c1220.firebaseapp.com",
    projectId: "clone-c1220",
    storageBucket: "clone-c1220.appspot.com",
    messagingSenderId: "1025703633455",
    appId: "1:1025703633455:web:d6fbecd270513c56ff5cda"
  };


  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()