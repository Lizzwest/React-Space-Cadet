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
import MercuryTwo from './components/MercuryTwo';
import MercuryThree from './components/MercuryThree';
import MercuryFour from './components/MercuryFour';
import MercuryFive from './components/MercuryFive';
import MercurySix from './components/MercurySix';
import Venus from './components/Venus';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import MissionModal from './components/MissionModal';
import FoundHimModal from './components/FoundHimModal';
import MercuryModal from './components/MercuryModal';
import MercuryModalTwo from './components/MercuryModalTwo';
import MercuryModalThree from './components/MercuryModalThree';
import MercuryModalFour from './components/MercuryModalFour';
import ModalTemp from './components/ModalTemp';
import NewProbe from './components/NewProbe';
import OhnoModal from './components/OhnoModal';
import VenusModal from './components/VenusModal';
import WarningModal from './components/WarningModal';
import WhyModal from './components/WhyModal';
import MapWarning from './components/MapWarning';
import FiringProbe from './components/FiringProbe';
import MercuryFourProbes from './components/MercuryFourProbes';
import Error from './components/Error'
import LevelTwo from './components/LevelTwo'
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
    <Route path="/mercurytwo" component={ MercuryTwo } />
    <Route path="/mercurythree" component={ MercuryThree } />
    <Route path="/mercuryfour" component={ MercuryFour } />
    <Route path="/mercuryfive" component={ MercuryFive } />
    <Route path="/mercurysix" component={ MercurySix } />
    <Route path="/venus" component={ Venus } />
    <Route exact path="/" component= {Landing}/>
    <Route path='/mapwarning' component={ MapWarning } />
    <Route path="/firingprobe" component={ FiringProbe } />
    <Route path="/leveltwo" component={LevelTwo} />
    <Route path='/cats' component={Error} />
    

   </Router>


   </>


  );
}

export default App;
