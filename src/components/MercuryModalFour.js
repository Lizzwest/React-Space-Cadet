import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'


const MercuryModalFour = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {window.location.href= "/mercurysix"};
    const handleCloseNo = () => {window.location.href= "/mercuryfive"};

    const handleShow = () => setShow(true);
    console.log('modals')

    return (
      <div className='modalBody'>


{!show&&<Button className= "newMissionButton" variant="primary" onClick={handleShow}>
          Select Shield!
        </Button>}

        <Modal  id='foundHimModal' className='clippedModal' show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title className='missionTitle'></Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h3 className='missionModalContent'> <strong>What protections do you want to add to your probe?</strong></h3>


          </Modal.Body>
          <Modal.Footer>
            <Button  className="multipleChoice" variant="secondary" onClick={handleCloseNo}>
              Laser Pointer
            </Button>
            <Button  className="multipleChoice" variant="secondary" onClick={handleCloseNo}>
              Night Vision
            </Button>
            <Button  className="multipleChoice" id='thirdButton' variant="secondary" onClick={handleClose}>
              Asteroid<br/>
               Force Field
            </Button>

          </Modal.Footer>
        </Modal>

      </div>
    );
  }

  export default MercuryModalFour;
