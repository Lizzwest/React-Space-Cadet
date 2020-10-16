import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const FoundHimModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {window.location.href= "/nextmission"};
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          
        {!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
         Start New Mission
        </Button>}
  
        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'>You Found Him!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'>Good Work Cadet!</h3>
                      
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleClose}>
              Next
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  
  export default FoundHimModal;