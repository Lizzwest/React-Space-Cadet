import React from 'react';
import {  Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
   
    
   <div className='appNav'>
   <div className='navRoutes'>
    <Router>
    <Navbar />
    <Route path="/signup" component={ Signup } />
    <Route path="/login" component={ Login } />
    <Route path="/mars" component={ Mars} />
    <Route path="/mercury" component={ Mercury } />
    <Route path="/venus" component={ Venus } />
    <Route exact path="/"
          render={(props) => <Landing {...props}/>}/>
   </Router>
   </div>
   
   </div>

   
  );
}

export default App;
