import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAy4aY__6dp_-FuHbGnY92bBF_vM4DKFME",
    authDomain: "clothing-website-a346e.firebaseapp.com",
    projectId: "clothing-website-a346e",
    storageBucket: "clothing-website-a346e.appspot.com",
    messagingSenderId: "970055673190",
    appId: "1:970055673190:web:f6b6992f1b823d81af14a7",
    measurementId: "G-7Q2CX7WM77"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;