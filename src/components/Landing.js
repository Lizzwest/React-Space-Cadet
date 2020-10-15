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
        <h1 className="welcome">Welcome Space Cadet</h1>
        {/* <h1 className="welcome">Welcome</h1> */}
        {/* <h2 className="spaceCadet"> Space Cadet </h2> */}
        <div className="astronaut">
            <h4 className="labelForUsername"> What should we call you?</h4>
            <div id="astronaut-image">
                {/* removed img tag in favor of background image on div */}
            </div>
        </div>
      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username" id="username-label">Username</label><br />
                            <input type="text" name="username" value={username} onChange={handleUsername} className="usernameInput" required />
                        </div>
      </form>
      <button  className="submitUsername" type='submit'>Start Mission</button>
      
      
    </div>
    );
    }

    export default Landing;