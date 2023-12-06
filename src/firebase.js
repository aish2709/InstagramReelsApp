import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


   
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUaYKJ4yR1ccYa7C1IIS7RlLv-hOSXWy0",
//   authDomain: "reels-b513e.firebaseapp.com",
//   projectId: "reels-b513e",
//   storageBucket: "reels-b513e.appspot.com",
//   messagingSenderId: "240325377323",
//   appId: "1:240325377323:web:b3baa0d9552e07163ad96e"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAqxU0dFdcqnJHEf_LUwlzD_A_3zTe6gv8",
  authDomain: "yt-demo-3f2c4.firebaseapp.com",
  projectId: "yt-demo-3f2c4",
  storageBucket: "yt-demo-3f2c4.appspot.com",
  messagingSenderId: "1037274396421",
  appId: "1:1037274396421:web:2c356dcf262cf9685e696c"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    // comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()