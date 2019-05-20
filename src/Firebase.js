import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyA6sjUrFx6DuvmIAE6yIaq-nsvsbJSHjFc",
  authDomain: "sandbox-63f93.firebaseapp.com",
  databaseURL: "https://sandbox-63f93.firebaseio.com",
  projectId: "sandbox-63f93",
  storageBucket: "sandbox-63f93.appspot.com",
  messagingSenderId: "717679540412",
  appId: "1:717679540412:web:1032e1f16904829a"
};
firebase.initializeApp(config);


export default firebase;