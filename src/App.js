import React, { useEffect, useState } from 'react';
import {  Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Startscreen from './components/Startscreen'
import axios from 'axios'
import Logout from './components/Logout';
import Mars from './components/Mars';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import MissionModal from './components/MissionModal';
import FoundHimModal from './components/FoundHimModal';
import MercuryModal from './components/MercuryModal';
import ModalTemp from './components/ModalTemp';
import NewProbe from './components/NewProbe';
import OhnoModal from './components/OhnoModal';
import VenusModal from './components/VenusModal';
import WarningModal from './components/WarningModal';
import WhyModal from './components/WhyModal';
import MapWarning from './components/MapWarning';
import FiringProbe from './components/FiringProbe';
import MercuryFourProbes from './components/MercuryFourProbes'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function App() {
    let [currentUser, setCurrentUser] = useState("");
    let [username, setUsername] = useState("");

    useEffect(()=>{
      if(username){
        axios.get(`${REACT_APP_SERVER_URL}/api/users/profile/${currentUser.id}`)
      }
    })
   return ( 
   <>
   
    <Router>
    {/* <Navbar /> */}
    <Route path="/signup" component={ Signup } />
    <Route path="/startscreen" component={ Startscreen }  />
    <Route path="/logout" component={ Logout } />
    <Route path="/mars" component={ Mars} />
    <Route path="/mercury" component={ Mercury } />
    <Route path="/venus" component={ Venus } />
    <Route exact path="/"
          render={(props) => <Landing {...props}/>}/>
    <Route path='/mapwarning' component={ MapWarning } />
    <Route path="/firingprobe" component={ FiringProbe } />

   </Router>
  
   
   </>

   
  );
}

export default App;
