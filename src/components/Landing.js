import React, { useState, useEffect } from 'react';

const Landing = () => {
    let [username, setUsername] = useState('');
    
    let handleUsername = (e) => {
        setUsername(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
    }
    const cadetData= { username }
    return (
    <div className="landingBody">
      <h2 className="welcome">Welcome</h2>
      <h1 className="spaceCadet"> Space Cadet </h1>
      <div className="astronaut">
     <div>
         <img src={'https://res-console.cloudinary.com/dl7aojigh/thumbnails/v1/image/upload/v1602738390/YXN0cm9uYXV0X2xhbmRpbmdfcGFnZV9pbWFnZV9sOXl0c2E=/preview'} alt="astronaut" className="astronaut"/></div>
      </div>
      <h4 className="labelForUsername"> What should we call you?</h4>
      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label><br />
                            <input type="text" name="username" value={username} onChange={handleUsername} className="usernameInput" required />
                        </div>
      </form>
      <button className="submitUsername" type='submit'>Start Mission</button>
      
      
    </div>
    );
    }

    export default Landing;