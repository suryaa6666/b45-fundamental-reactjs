import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Conditional } from './Conditional';
import Props from './Props';
import State from './State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Conditional />
  </React.StrictMode>
);
