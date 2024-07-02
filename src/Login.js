import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error] = useState('');
    const navigate= useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                email,
                password
            });
            // Handle successful login, for example by saving the token
            localStorage.setItem('token', response.data.token);
            // Redirect or update the UI accordingly
            console.log('Login successful', response.data);
            navigate("/UserDashboard")
        } catch (error) {
            
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="formGroup">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="formGroup">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <button type="submit" className="btnSubmit">Login</button>
            </form>
        </div>
    );
};

export default Login;
