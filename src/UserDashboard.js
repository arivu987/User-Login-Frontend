import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <div className="welcome-message">Hello, User!</div>
            <div className="dashboard-content">
                This is your dashboard. You can view and manage your information here.
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default UserDashboard;
