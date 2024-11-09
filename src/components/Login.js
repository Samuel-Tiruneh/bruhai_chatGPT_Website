import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      navigate('/chat');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  return (
    <div className="login-container container-fluid p-3 my-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <img src={`${process.env.PUBLIC_URL}/th.png`} className="img-fluid" alt="Bruh AI Logo" />
        </div>
        <div className="col-12 col-md-5 login-form mx-auto">
          <h2 className="text-center mb-4">Sign In and Reach</h2>
          {error && <div className="text-danger mb-3">{error}</div>}
          <div className="mb-4 input-with-icon">
            <i className="fas fa-user input-icon"></i>
            <input 
              type="text"
              id="usernameInput"
              className="form-control input-icon-field"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4 input-with-icon">
            <i className="fas fa-lock input-icon"></i>
            <input 
              type="password"
              id="passwordInput"
              className="form-control input-icon-field"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <label className="custom-checkbox" style={{ color: '#FFD700' }}>
              <input type="checkbox" id="flexCheckDefault" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="!#" style={{ color: '#FFD700' }}><i className="fas fa-key"></i> Forgot password?</a>
          </div>
          <button onClick={handleSignIn} className="btn login-button w-100 laser-button mb-4" style={{ backgroundColor: '#FFD700', color: '#000' }}>
            <i className="fas fa-sign-in-alt"></i> Sign in
          </button>
          <button onClick={handleRegister} className="btn login-button w-100 laser-button mb-4" style={{ backgroundColor: '#FFD700', color: '#000' }}>
            <i className="fas fa-user-plus"></i> Register
          </button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <button className="btn login-button w-100 laser-button mb-4" style={{ backgroundColor: '#4285F4' }}>
            <i className="fab fa-google mx-2"></i> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
