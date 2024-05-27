import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setLogin, setUserName, setUserRights }) {
    const [localUserName, setLocalUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                userName: localUserName,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setLogin(true);
            setUserName(response.data.userName);
            setUserRights(response.data.userRights.userRightsId);
            navigate('/');
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={localUserName}
                onChange={(e) => setLocalUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
