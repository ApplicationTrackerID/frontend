import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      let response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      response = await response.json();
      console.log('Login response:', response);
      
      if (response.access_token) {
        // Store user data in localStorage for persistence
        const token = response.access_token;
        localStorage.setItem("token", token);
        navigate('/home');
      } else {
        // Handle API error responses
        setError(response.detail || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <div className="login-page">
      <div className="login-content">
        {/* Logo */}
        <div className="logo-container">
          <img 
            src="/src/assets/images/logo.png" 
            alt="Immigration Portal Logo" 
            className="logo"
          />
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}>
          {/* Error Message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          {/* Username Field */}
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="form-input"
              required
              disabled={loading}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input"
              required
              disabled={loading}
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Contact Us Link */}
        <button 
          className="contact-us-link"
          onClick={handleContactUs}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
