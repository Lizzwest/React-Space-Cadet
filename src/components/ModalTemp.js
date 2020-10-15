import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const ModalTemp = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          {/* //gotta center */}
        <Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          New Mission Incoming. . . 
        </Button>
  
        <Modal  id='missionModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'>MISSION DETECTED!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'>Solar System: Mercury</h3>
                      <h3 className='missionModalContent'>Missions: 1</h3>
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleClose}>
              Open Map
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  
  export default ModalTemp;