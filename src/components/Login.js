import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Login = (props) => {
    let [username, setUsername] = useState('');
    
    let handleUsername = (e) => {
        setUsername(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        const cadetData = { username };
        // gonna have to keep building out
        // but basic skeleton of what we should accomplish
        return (

            <div className="loginForm">

                <h2 className="formLabel">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" name="username" value={username} onChange={handleUsername} className="input" required />
                    </div>
                    <button type="submit" className="button">Submit</button>
                    {/* <div>{props.errorFlash}</div> */}
                </form>
            </div>


        )}}

export default Login;