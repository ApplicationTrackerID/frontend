import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetailsPage.css';
import Navbar from './Navbar';


const ServiceDetailsPage = () => {
  const navigate = useNavigate();

  const handleTrackApplication = () => {
    navigate('/login');
  };

  const handleContactUs = () => {
    navigate('/contact-us');
  };


  return (
    <div className="service-details-page">
      {/* Header Section */}
      {/* <div className="header-section">
        <div className="header-content">
          <div className="logo-container" onClick={handleLogoClick}>
            <img 
              src="/logo_full (3)-cropped.svg" 
              alt="Immigration Portal Logo" 
              className="logo"
            />
          </div>
        </div>
      </div> */}

      <Navbar />

      {/* Main Section */}
      <div className="main-section">
        <div className="main-content">
          <h1 className="page-heading">About this service</h1>
          
          <div className="content-text">
            <p>
              ApplicationTracker.id is an official platform for structured tracking and oversight of application and induction processes across multiple departments and jurisdictions. It is purpose-built for cases requiring coordinated approvals from entities such as the Ministry of Labor, Immigration and Border Control, Admissions and Enrollment Offices, Financial Aid and Loans Departments, the Ministry of Sports, the Ministry of Culture and Heritage, and others.
            </p>
            
            <p>
              Widely adopted by employers, academic institutions, legal representatives, government bodies, and licensed immigration consultants, the system provides centralized case management and transparent status reporting. ApplicationTracker.id ensures procedural clarity, accountability, and secure communication at every stage of the application lifecycle. All in all, it is a one‑stop command center for authoritative, end‑to‑end monitoring of work, student, business and job‑seeker visas, immigration processes, work permits and more.
            </p>
            
            <p>
              To explore how ApplicationTracker can fortify your application journey, reach us at{' '}
              <button 
                className="email-link"
                onClick={handleContactUs}
              >
                info@applicationtracker.id
              </button>
            </p>
          </div>

          {/* Track Application Button */}
          <button 
            className="track-application-btn"
            onClick={handleTrackApplication}
          >
            Track Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
