import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MercuryModalTwo = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {window.location.href= "/mercurythree"};

    const handleShow = () => setShow(true);
    console.log('modals')

    return (
      <div className='modalBody'>


{!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          PROBE STILL OFFLINE
        </Button>}

        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent' id="explain"> The atmospheric pressure of Mercury is less than One Trillionth of Earth’s, and there’s no barrier to prevent asteroids from impacting Mercury’s crust. That’s why Mercury has the most craters out of all the Milky Way planets.</h3>


          </Modal.Body>
          <Modal.Footer>
            <Button className='mapButton' variant="secondary" onClick={handleClose}>
              Understood!
            </Button>

          </Modal.Footer>
        </Modal>

      </div>
    );
  }

  export default MercuryModalTwo;
