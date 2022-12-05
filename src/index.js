import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Navigation/Nav.css"
import "./Pages/Home.css"
import "./Pages/Portfolio.css"
import "./Pages/Login/Login.css"
import "./Pages/Register/Register.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);