import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const WarningModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleShift = () => {window.location.href="/firingprobe"}
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          {/* //gotta center */}
        {!show&&<Button className= "missionDetails" variant="primary" onClick={handleShow}>
          MISSION DETAILS 
        </Button>}
  
        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleShift}>
          <Modal.Header >
            <Modal.Title className='missionTitle'></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'>A fellow Cadet has been lost at the bottom of a crater and needs your help!</h3>
                      <h4 className='missionModalSmaller'>Ready to send out a probe to find him?</h4>
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleShift}>
              Send Probe
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  
  export default WarningModal;