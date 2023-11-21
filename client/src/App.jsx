import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
    <div className='bg-slate-900'>
      <Navbar />
    </div>
    </Router>
  );
};

export default App

