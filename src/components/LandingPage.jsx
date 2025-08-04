import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { jwtDecode } from 'jwt-decode';


const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // expiration time is in seconds
  } catch (e) {
    console.error('Error decoding token:', e);
    return false;
  }
};

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && isTokenValid(token)) {
      navigate('/home');
    }
  }, [navigate]);


  const handleTrackApplication = () => {
    navigate('/login');
  };

  const handleLearnMore = () => {
    navigate('/service-details');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* Logo - replace src with your actual logo path */}
        <div className="logo-container">
          <img 
            src="/src/assets/images/logo.png" 
            alt="Immigration Portal Logo" 
            className="logo"
          />
        </div>

        {/* Site description */}
        <div className="description">
          <p>
            A centralized platform for tracking multi-departmental applications—trusted by institutions, employers, legal firms, and government agencies for secure, transparent, and structured case management.
          </p>
        </div>

        {/* Track Application Button */}
        <button 
          className="track-application-btn"
          onClick={handleTrackApplication}
        >
          Track Application
        </button>

        {/* Learn More Link */}
        <button 
          className="learn-more-link"
          onClick={handleLearnMore}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
