import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const ToMercuryModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleShift = () => {window.location.href="/mercury"}
    const handleShow = () => setShow(true);
    console.log('modals')
  
    return (
      <div className='modalBody'>

          {/* //gotta center */}
        {!show&&<Button className= "missionDetails" variant="primary" onClick={handleShow}>
          CADET LOCATED 
        </Button>}
  
        <Modal  id='missionModal' className='mercuryDetails' show={show} onHide={handleShift}>
          <Modal.Header >
            <Modal.Title className='missionTitle'></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h4 className='missionModalSmaller'>Planet : Mercury</h4>
                      <h5 className='missionModalSmallest'>
                      Weather : None<br />
                      Atmosphere : Thin<br />
                      Temperature : 243°<br />
                      Terrain : Craters</h5>

                      
                                      
          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleShift}>
              Let's Go
            </Button>
            
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  
  export default ToMercuryModal;