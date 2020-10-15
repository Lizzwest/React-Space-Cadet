import React, { useState, useEffect } from 'react';
import Modal from './MissionModal'
import MissionModal from './MissionModal';


const Startscreen = (props) => {
    //need this to be set to true after a timeout
    // this.setState({isModalOpen: true})
    return (
        <div className='startscreen'>
            <h1>Startscreen Page</h1>
            <MissionModal />
            </div>
        
    );
    }

    export default Startscreen;