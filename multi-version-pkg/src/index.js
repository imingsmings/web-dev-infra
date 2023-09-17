import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import '../node_modules/antd4/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
