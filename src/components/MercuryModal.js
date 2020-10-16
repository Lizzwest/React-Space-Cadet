import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MercuryModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {window.location.href= "/"};

    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          
{!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          PROBE OFFLINE 
        </Button>}
  
        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'>Oh no!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'> Your first probe has been destroyed by an asteroid!</h3>
                      
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleClose}>
              Why?
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  
  export default MercuryModal;