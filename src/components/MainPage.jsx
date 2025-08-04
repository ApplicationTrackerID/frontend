import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPageNew.css';

const MainPage = () => {
  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState({
    fullName: 'John Doe',
    primaryEmail: 'john.doe@example.com',
    alternativeEmail: 'john.alt@example.com',
    contactNumber: '+1234567890',
    alternativeContact: '+0987654321'
  });

  // const [applicationDetails] = useState({
  //   nationality: 'American',
  //   passportNumber: 'US123456789',
  //   passportExpiry: '2030-12-31',
  //   passportType: 'Regular',
  //   applicationReference: 'APP-2024-001234'
  // });

  // const [serviceDetails] = useState({
  //   servicePackage: 'Premium Immigration Package',
  //   category: 'Work Visa'
  // });

  const userDataStatic = {
    nationality: 'American',
    passportNumber: 'US123456789',
    passportExpiry: '2030-12-31',
    passportType: 'Regular',
    applicationReference: 'APP-2024-001234',
    servicePackage: 'Premium Immigration Package',
    category: 'Work Visa'
  }
  

  const [editMode, setEditMode] = useState(false);
  const [originalUserInfo, setOriginalUserInfo] = useState({ ...userInfo });

  const [progressSteps] = useState([
    { name: 'Submission of documents', status: 'Complete', details: 'All required documents have been submitted and verified.' },
    { name: 'Internal assessment', status: 'Complete', details: 'Your application has passed the initial review process.' },
    { name: 'Third-party verification', status: 'In progress', details: 'Background verification is currently in progress. This may take 2-3 weeks.' },
    { name: 'Work permit application', status: 'In progress', details: '' },
    { name: 'Visa application', status: 'Not started', details: '' },
    { name: 'Visa interview appointment', status: 'Not started', details: '' },
    { name: 'Visa decision', status: 'Not started', details: '' },
    { name: 'Application closure', status: 'Not started', details: '' }
  ]);

  const handleEdit = () => {
    if (!editMode) {
      // Store original values when entering edit mode
      setOriginalUserInfo({ ...userInfo });
    }
    setEditMode(true);
  };

  const handleSave = () => {
    // Save logic here - will connect to API later
    console.log('Saving user info:', userInfo);
    setEditMode(false);
    setOriginalUserInfo({ ...userInfo });
  };

  const handleCancel = () => {
    // Restore original values
    setUserInfo({ ...originalUserInfo });
    setEditMode(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return 'status-complete';
      case 'in progress':
        return 'status-in-progress';
      case 'blocked':
        return 'status-blocked';
      case 'attention required':
        return 'status-attention';
      default:
        return 'status-not-started';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return (
          <svg className="status-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in progress':
        return <div className="pulse-dot"></div>;
      case 'blocked':
        return (
          <svg className="status-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'attention required':
        return (
          <svg className="status-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return <div className="empty-dot"></div>;
    }
  };

  return (
    <div className="main-page">
      {/* Navbar */}
      <div className="navbar">
      <img 
            src="/logo_full.png" 
            alt="Immigration Portal Logo" 
            className="logo"
          />
        <div className="navbar-right">
          <span className="username">Username</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* User Information Section */}
      <div className="user-info-section">
        {/* User Details Subsection */}
        <div className="subsection user-details">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName" 
              value={userInfo.fullName} 
              onChange={handleInputChange} 
              disabled={!editMode}
              className={editMode ? 'editable' : 'readonly'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="primaryEmail">Primary Email</label>
            <input 
              type="email" 
              id="primaryEmail"
              name="primaryEmail" 
              value={userInfo.primaryEmail} 
              onChange={handleInputChange} 
              disabled={!editMode}
              className={editMode ? 'editable' : 'readonly'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alternativeEmail">Alternative Email</label>
            <input 
              type="email" 
              id="alternativeEmail"
              name="alternativeEmail" 
              value={userInfo.alternativeEmail} 
              onChange={handleInputChange} 
              disabled={!editMode}
              className={editMode ? 'editable' : 'readonly'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input 
              type="text" 
              id="contactNumber"
              name="contactNumber" 
              value={userInfo.contactNumber} 
              onChange={handleInputChange} 
              disabled={!editMode}
              className={editMode ? 'editable' : 'readonly'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="alternativeContact">Alternative Contact</label>
            <input 
              type="text" 
              id="alternativeContact"
              name="alternativeContact" 
              value={userInfo.alternativeContact} 
              onChange={handleInputChange} 
              disabled={!editMode}
              className={editMode ? 'editable' : 'readonly'}
            />
          </div>
          <div className="button-group">
            {!editMode ? (
              <button className="edit-button" onClick={handleEdit}>
                Edit
              </button>
            ) : (
              <>
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Passport Details Subsection */}
        <div className="subsection passport-details">
          <div className="form-group">
            <label htmlFor="nationality">Nationality</label>
            <input 
              type="text" 
              id="nationality"
              value={userDataStatic.nationality} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportNumber">Passport Number</label>
            <input 
              type="text" 
              id="passportNumber"
              value={userDataStatic.passportNumber} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportExpiry">Passport Expiry</label>
            <input 
              type="text" 
              id="passportExpiry"
              value={userDataStatic.passportExpiry} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportType">Passport Type</label>
            <input 
              type="text" 
              id="passportType"
              value={userDataStatic.passportType} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="applicationReference">Application Reference</label>
            <input 
              type="text" 
              id="applicationReference"
              value={userDataStatic.applicationReference} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="servicePackage">Service Package</label>
            <input 
              type="text" 
              id="servicePackage"
              value={userDataStatic.servicePackage} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category"
              value={userDataStatic.category} 
              disabled
              className="readonly"
            />
          </div>
        </div>
        </div>

      {/* Application Progress Section */}
      <div className="application-progress-section">
        <h2>Application Progress</h2>
        <div className="progress-trail">
          {progressSteps.map((step, index) => (
            <div key={index} className="progress-step">
              <div className="step-container">
                <div className="step-icon-container">
                  <div className={`step-icon ${getStatusClass(step.status)}`}>
                    {getStatusIcon(step.status)}
                  </div>
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <h4>{step.name}</h4>
                    <span className={`status ${getStatusClass(step.status)}`}>
                      {step.status}
                    </span>
                  </div>
                  <div className="step-details">
                    <textarea
                      placeholder="No details available at this time."
                      value={step.details}
                      readOnly
                      rows="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

