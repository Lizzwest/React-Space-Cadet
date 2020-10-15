import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Logout = (props) => {

    return(
        <div className="logout">
        <h1 className="spaceCadet"> Space Cadet </h1>
      <div className="astronaut">
     <div>
         <img src={'https://res-console.cloudinary.com/dl7aojigh/thumbnails/v1/image/upload/v1602738390/YXN0cm9uYXV0X2xhbmRpbmdfcGFnZV9pbWFnZV9sOXl0c2E=/preview'} alt="astronaut" className="astronaut"/></div>
      </div>
        </div>
    )
}

export default Logout;