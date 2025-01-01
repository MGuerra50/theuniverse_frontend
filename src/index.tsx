import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

document.body.style.margin = "0";
document.body.style.display =  "flex";