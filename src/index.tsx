import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // https://stackoverflow.com/a/65167384/7398502
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);

reportWebVitals();
