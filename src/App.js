import './App.css';
import React from "react";
import { ToastContainer } from 'react-toastify';
//import Addbook from './routes/Addbook';
import Homepage from './routes/Homepage';
//import Navbar from './components/Navbar';
//import { Route, Switch } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      {/* /add /edit/:id */}
        <ToastContainer />
        <Homepage />
        
          
          
      
    </div>
  );
}

export default App;
