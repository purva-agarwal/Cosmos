import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJb9mKjJ33nPBs0CO37rVbmMvvknxqkUA",
    authDomain: "cosmos-010.firebaseapp.com",
    databaseURL: "https://cosmos-010.firebaseio.com",
    projectId: "cosmos-010",
    storageBucket: "cosmos-010.appspot.com",
    messagingSenderId: "327137299886",
    appId: "1:327137299886:web:e67de334e24e88b2f64c3f",
    measurementId: "G-JGG9JPSYVX"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }


export default firebase;