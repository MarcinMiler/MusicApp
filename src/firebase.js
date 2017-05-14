import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0iwSd0705Dc2-P0yzoGne1Q2JZUxvyyg",
  authDomain: "musicapp-5ce54.firebaseapp.com",
  databaseURL: "https://musicapp-5ce54.firebaseio.com",
  storageBucket: "musicapp-5ce54.appspot.com",
  messagingSenderId: "833722048350"
  };
export const firebaseApp = firebase.initializeApp(config);
