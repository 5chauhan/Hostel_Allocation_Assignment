import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBABgES2wVLgh03SIockiEjc-EjCus6Vf8",
  authDomain: "hostelapp-f53b1.firebaseapp.com",
  projectId: "hostelapp-f53b1",
  storageBucket: "hostelapp-f53b1.appspot.com",
  messagingSenderId: "177595369481",
  appId: "1:177595369481:web:1266b6678394191a1ad0d8",
  measurementId: "G-HJN4G35YX3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));