import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//store- globalised state, where you store everything

// action- search
const search = () => {
  return {
    type: 'SEARCH'
  }
};


//reducer-how your ations transforms the current state into the next state
const searchFind = (state = 0, action ) => {

};

let store = configureStore(search);


//dispatch- how we finaly execute everthing

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
