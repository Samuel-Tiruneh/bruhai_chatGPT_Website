import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('Wait a moment...');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setMessage(`${username}, you registered successfully.`);
      setIsLoading(false);
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container container-fluid p-3 my-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <img src={`${process.env.PUBLIC_URL}/th.png`} className="img-fluid" alt="Bruh AI Logo" />
        </div>
        <div className="col-12 col-md-5 register-form mx-auto">
          <h2 className="text-center mb-4">Register and Join Us</h2>
          {message && <div className={`text-center mb-3 ${message.includes('successfully') ? 'text-success' : 'text-danger'}`}>{message}</div>}
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
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              id="emailInput"
              className="form-control input-icon-field"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
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
          <button onClick={handleRegister} className="btn register-button w-100 laser-button mb-4" style={{ backgroundColor: '#FFD700', color: '#000' }}>
            <i className="fas fa-user-plus"></i> Register
          </button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <button className="btn register-button w-100 laser-button mb-4" style={{ backgroundColor: '#4285F4' }}>
            <i className="fab fa-google mx-2"></i> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
