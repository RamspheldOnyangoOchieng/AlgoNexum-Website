import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';// Ensure this path is correct
import './index.css';      // Or './index.css' if that’s where Tailwind is

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
