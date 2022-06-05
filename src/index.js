import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./context"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
          <App />
      </Router>
    </ContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

