import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzdOo_nF3rABKJjlmdc08-TkqyexNOQTs",
    authDomain: "unsplash-5bdeb.firebaseapp.com",
    databaseURL: "https://unsplash-5bdeb.firebaseio.com",
    projectId: "unsplash-5bdeb",
    storageBucket: "unsplash-5bdeb.appspot.com",
    messagingSenderId: "390526217141",
    appId: "1:390526217141:web:7b1ce620b80b38a8f607fc",
    measurementId: "G-5JMYQC4BKR"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const auth = app.auth()
  const db = app.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {auth,db,provider}