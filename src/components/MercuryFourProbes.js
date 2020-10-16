import React from 'react';
// import ToMercuryModal from './ToMercuryModal';
import {  Button } from 'react-bootstrap'

const MercuryFourProbes = () => {
    const handleShift = () => {window.location.href= "/mercury"};
    return (
        <div className='fourprobes'>
            
            {/* <Button className="goToMercury" transparent onClick={handleShift}>Head to Mercury</Button> */}

        </div>
    );
    }

    export default MercuryFourProbes;