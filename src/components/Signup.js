import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Signup = (props) => {
    let [username, setUsername] = useState('');
    let handleUsername = (e) => {
        setUsername(e.target.value);
    }
    return (
        <div className='signup'>
            <h1>Signup Page</h1>
        </div>
    );
    }

    export default Signup;