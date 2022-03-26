import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyBOg7EMQu8cXOhxNRBaugs3RxDibNmN4Ag",
  authDomain: "hostel-allocation-assign-e3eb5.firebaseapp.com",
  projectId: "hostel-allocation-assign-e3eb5",
  storageBucket: "hostel-allocation-assign-e3eb5.appspot.com",
  messagingSenderId: "658021567495",
  appId: "1:658021567495:web:08aff38a817e14c593eea2",
  measurementId: "G-DED637NFQM"

};


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));