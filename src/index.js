import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/users/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter 
  //  basename="/follow"
  >
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);

reportWebVitals();
