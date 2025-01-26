import React from 'react';
import ReactDOM from 'react-dom/client';  // Update this import to use 'react-dom/client'
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Create a root for rendering the app (for React 18 or later)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register();
