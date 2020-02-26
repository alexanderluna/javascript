import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
  apiKey: 'AIzaSyAdArpq7yohPL8bPyLUQ30aR1VUut_29RM',
  authDomain: 'e-commerce-e8c49.firebaseapp.com',
  databaseURL: 'https://e-commerce-e8c49.firebaseio.com',
  projectId: 'e-commerce-e8c49',
  storageBucket: 'e-commerce-e8c49.appspot.com',
  messagingSenderId: '165276320664',
  appId: '1:165276320664:web:3e7aee61f01697e47d61ed',
  measurementId: 'G-R5L18M1YBH',
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => (
  auth.signInWithPopup(provider)
);

export default firebase;
