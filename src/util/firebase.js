import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCowOrnohZJDBQrDcb3kPLGz5tOxxwZ3JI",
    authDomain: "sample-react-app-dc8d3.firebaseapp.com",
    databaseURL: "https://sample-react-app-dc8d3.firebaseio.com",
    projectId: "sample-react-app-dc8d3",
    storageBucket: "sample-react-app-dc8d3.appspot.com",
    messagingSenderId: "535656909112"
});

export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();