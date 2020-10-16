import React from 'react';
import ToMercuryModal from './ToMercuryModal';
import {  Button } from 'react-bootstrap'

const FiringProbe = () => {
    const handleShift = () => {window.location.href= "/mercury"};
    return (
        <div className='fiveprobes'>
            <ToMercuryModal />
            {/* <Button className="goToMercury" transparent onClick={handleShift}>Head to Mercury</Button> */}

        </div>
    );
    }

    export default FiringProbe;