import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import UserDashboard from './UserDashboard';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/UserDashboard' element={<UserDashboard/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
