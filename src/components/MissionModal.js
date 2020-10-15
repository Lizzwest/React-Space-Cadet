import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MissionModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='missionTitle'>Mission Detected</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModal'>Solar System: Mercury</h3>
                      <h3 className='missionModal'>Missions: 1</h3>
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Open Map
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }
  
  export default MissionModal;