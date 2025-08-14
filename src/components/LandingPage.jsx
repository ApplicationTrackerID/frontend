import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();


  const handleTrackApplication = () => {
    navigate('/login');
  };

  const handleLearnMore = () => {
    navigate('/service-details');
  };
  

  return (
    <div className={styles["landing-page"]}>
<div className={styles['logo-container']}>
<img 
            src="/logo_full (3)-cropped.svg" 
            alt="Immigration Portal Logo" 
            className={styles["logo"]}
          />
          </div>
      <div className={styles["landing-content"]}>
        {/* Logo - replace src with your actual logo path */}
        {/* <div className={styles["logo-container"]}>
          <img 
            src="/logo_full.png" 
            alt="Immigration Portal Logo" 
            className={styles["logo"]}
          />
        </div> */}
        

        {/* Site description */}
        <div className={styles["description"]}>
        
          <p>
            A centralized platform for tracking multi-departmental applications—trusted by institutions, employers, legal firms, and government agencies for secure, transparent, and structured case management.
          </p>
        </div>

        {/* Track Application Button */}
        <button 
          className={styles["track-application-btn"]}
          onClick={handleTrackApplication}
        >
          Track Application
        </button>

        {/* Learn More Link */}
        <button 
          className={styles["learn-more-link"]}
          onClick={handleLearnMore}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
