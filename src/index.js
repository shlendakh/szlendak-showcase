import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'

// Aktualizacja wysokości okna dla urządzeń mobilnych
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);