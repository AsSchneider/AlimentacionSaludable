import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyAP_w0yapGwTTSgcxsm41hi6pMKNbhiirY",
  authDomain: "camada-44970-3f09e.firebaseapp.com",
  projectId: "camada-44970-3f09e",
  storageBucket: "camada-44970-3f09e.appspot.com",
  messagingSenderId: "1062239337137",
  appId: "1:1062239337137:web:727fc894f08d639a8a4090"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<React.StrictMode>*/}
      <App />
    {/*</React.StrictMode>*/}
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
