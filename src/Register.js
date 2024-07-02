import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            console.log(error)
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/register', {
                username,
                email,
                password,
                confirm_password: confirmPassword 
            });
            // Handle successful registration
            setSuccess('Registration successful!');
           
            console.log('Registration successful', response.data);
            // Redirect to login page
            navigate('/login');
        } catch (error) {

            console.error('There was an error!', error);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="formGroup">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="formGroup">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="formGroup">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="formGroup">
                    <label>Confirm Password:</label>
                    <input type="password"value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>
                </div>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {success && <p style={{color: 'green'}}>{success}</p>}
                <button type="submit" className="btnSubmit">Register</button>
            </form>
        </div>
    );
};

export default Register;
