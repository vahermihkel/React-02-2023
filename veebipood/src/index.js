import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// navigeerimiseks:
// 1. npm install react-router-dom
// 2. index.js faili sisse BrowserRouter
// 3. App.js faili sisse URL ja sellele vastava sisu seosed
//        telia.ee/ari     <div>Äri loogika</div>
//        telia.ee/era     <div>Erakliendi loogika</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


