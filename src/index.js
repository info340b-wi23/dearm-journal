import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import App from './components/App.js';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyAWxWuDvubVW38FuplSLu6HFTwXhJaHGiU",
  authDomain: "dearm-journal-a829a.firebaseapp.com",
  projectId: "dearm-journal-a829a",
  storageBucket: "dearm-journal-a829a.appspot.com",
  messagingSenderId: "1066196978864",
  appId: "1:1066196978864:web:f7dfa3408067d0114dbf75"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
