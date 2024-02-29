import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuthenticated = false;

root.render(
  <React.StrictMode>
    <App
      numberOfCards = {5}
      isAuthenticated={isAuthenticated}
    />
  </React.StrictMode>
);
