import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MercuryModalSix = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {window.location.href= "/leveltwo"};

    const handleShow = () => setShow(true);
    console.log('modals')

    return (
      <div className='modalBody'>


{!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          LOCATION ACQUIRED
        </Button>}

        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'>Oh no!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'> <strong>You Found him! Good work, Cadet</strong></h3>


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

  export default MercuryModalSix;
