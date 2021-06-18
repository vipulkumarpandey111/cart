import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig={
  apiKey: "AIzaSyCmNz_UdgzTa_zdnmG77SNhRHWBuvcV-Nc",
  authDomain: "cart-3db9a.firebaseapp.com",
  projectId: "cart-3db9a",
  storageBucket: "cart-3db9a.appspot.com",
  messagingSenderId: "97200294469",
  appId: "1:97200294469:web:440095ce4672bb86c9b12c"
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

