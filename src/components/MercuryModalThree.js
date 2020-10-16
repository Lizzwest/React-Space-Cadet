import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MercuryModalThree = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {window.location.href= "/mercuryfour"};
    const handleCloseNo = () => {window.location.href= "/mercurytwo"};

    const handleShow = () => setShow(true);
    console.log('modals')

    return (
      <div className='modalBody'>


{!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          PREPARE PROBE
        </Button>}

        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'> <strong>Would you like to send a New Probe?</strong></h3>


          </Modal.Body>
          <Modal.Footer>
            <Button className='twoAnswers' variant="secondary" onClick={handleClose}>
              Yes
            </Button>
            <Button className='twoAnswers' variant="secondary" onClick={handleCloseNo}>
              No
            </Button>

          </Modal.Footer>
        </Modal>

      </div>
    );
  }

  export default MercuryModalThree;
