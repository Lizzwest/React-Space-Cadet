import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const FoundHimModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {window.location.href= "/"};
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          
        {!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
         Start New Mission
        </Button>}
  
        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
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
  
  export default FoundHimModal;