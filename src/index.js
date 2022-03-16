//Author : Abel Okoh
//Seneca College

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
//import { BrowserRouter } from 'react-router-dom';
//import Home from '.components/Home';
import Addbook from './routes/Addbook';
import Editbook from './routes/Editbook';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { createStore } from 'redux';
import bookReducer from './redux/reducers/bookReducer';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Homepage from './routes/Homepage';

//Importation for redux and reducers
const store = createStore(bookReducer)

ReactDOM.render(
  <Provider store={store}>
  
    <BrowserRouter>
    <ToastContainer />
    <Navbar />
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addbook" element={<Addbook />} />
      <Route path="/editbook/:id" element={<Editbook />} />
    </Routes>
    </BrowserRouter>
    
     </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
