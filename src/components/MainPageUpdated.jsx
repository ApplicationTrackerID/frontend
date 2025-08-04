import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './MainPageNew.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  
  // Get user data from localStorage
  // const getUserData = () => {
  //   const storedData = localStorage.getItem('userData');
  //   if (storedData) {
  //     return JSON.parse(storedData);
  //   }
  //   // If no data, redirect to login
  //   navigate('/login');
  //   return null;
  // };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assume you stored user ID or username from login
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        const data = await response.json();

        if (data) {
          console.log("data:",data)
          setUserData(data);
        } else {
          // setError(data.detail || 'Failed to fetch user data');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        // setError('Network error');
      }finally {
        setLoading(false);
      }
      
    };
    fetchUserData();
  }, [location.pathname, navigate]);


  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState({})
  const [applicationDetails, setApplicationDetails] = useState({})
  const [serviceDetails,setServiceDetails] = useState({})
  const [originalUserInfo, setOriginalUserInfo] = useState({});
  const [progressSteps, setProgressSteps] = useState([])


  useEffect(() => {
    if (userData) {
      const userDetails = userData?.user_details || {};
      const progressData = userData?.progress || {};
      setUserInfo({
        username: userDetails.username,
        fullName: userDetails.full_name,
        primaryEmail: userDetails.primary_email || '',
        alternativeEmail: userDetails.alternative_email || '',
        contactNumber: userDetails.contact_number || '',
        alternativeContact: userDetails.alternative_contact || ''
      })
      setApplicationDetails({
        nationality: userDetails.nationality || '',
        passportNumber: userDetails.passport_number || '',
        passportExpiry: userDetails.passport_expiry || '',
        passportType: userDetails.passport_type || '',
        applicationReference: userDetails.application_reference || ''
      })
      setServiceDetails({
        servicePackage: userDetails.service_package || '',
        category: userDetails.category || ''
      })
      setOriginalUserInfo({ ...userInfo })

      setProgressSteps( [{ 
        name: 'Submission of documents', 
        status: progressData.submission_of_documents_status || 'Not started', 
        details: progressData.submission_of_documents_details || '' 
      },
      { 
        name: 'Internal assessment', 
        status: progressData.internal_assessment_status || 'Not started', 
        details: progressData.internal_assessment_details || '' 
      },
      { 
        name: 'Third-party verification', 
        status: progressData.third_party_verification_status || 'Not started', 
        details: progressData.third_party_verification_details || '' 
      },
      { 
        name: 'Work permit application', 
        status: progressData.work_permit_application_status || 'Not started', 
        details: progressData.work_permit_application_details || '' 
      },
      { 
        name: 'Visa application', 
        status: progressData.visa_application_status || 'Not started', 
        details: progressData.visa_application_details || '' 
      },
      { 
        name: 'Visa interview appointment', 
        status: progressData.visa_interview_appointment_status || 'Not started', 
        details: progressData.visa_interview_appointment_details || '' 
      },
      { 
        name: 'Visa decision', 
        status: progressData.visa_decision_status || 'Not started', 
        details: progressData.visa_decision_details || '' 
      },
      { 
        name: 'Application closure', 
        status: progressData.application_closure_status || 'Not started', 
        details: progressData.application_closure_details || '' 
      }])

    }
  }, [userData]);




  // const [userInfo, setUserInfo] = useState({
  //   fullName: userDetails.full_name,
  //   primaryEmail: userDetails.primary_email || '',
  //   alternativeEmail: userDetails.alternative_email || '',
  //   contactNumber: userDetails.contact_number || '',
  //   alternativeContact: userDetails.alternative_contact || ''
  // });

  // const [applicationDetails] = useState({
  //   nationality: userDetails.nationality || '',
  //   passportNumber: userDetails.passport_number || '',
  //   passportExpiry: userDetails.passport_expiry || '',
  //   passportType: userDetails.passport_type || '',
  //   applicationReference: userDetails.application_reference || ''
  // });

  // const [serviceDetails] = useState({
  //   servicePackage: userDetails.service_package || '',
  //   category: userDetails.category || ''
  // });

  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState('');


  // Map progress data from API to progress steps
  // const [progressSteps] = useState([
  //   { 
  //     name: 'Submission of documents', 
  //     status: progressData.submission_of_documents_status || 'Not started', 
  //     details: progressData.submission_of_documents_details || '' 
  //   },
  //   { 
  //     name: 'Internal assessment', 
  //     status: progressData.internal_assessment_status || 'Not started', 
  //     details: progressData.internal_assessment_details || '' 
  //   },
  //   { 
  //     name: 'Third-party verification', 
  //     status: progressData.third_party_verification_status || 'Not started', 
  //     details: progressData.third_party_verification_details || '' 
  //   },
  //   { 
  //     name: 'Work permit application', 
  //     status: progressData.work_permit_application_status || 'Not started', 
  //     details: progressData.work_permit_application_details || '' 
  //   },
  //   { 
  //     name: 'Visa application', 
  //     status: progressData.visa_application_status || 'Not started', 
  //     details: progressData.visa_application_details || '' 
  //   },
  //   { 
  //     name: 'Visa interview appointment', 
  //     status: progressData.visa_interview_appointment_status || 'Not started', 
  //     details: progressData.visa_interview_appointment_details || '' 
  //   },
  //   { 
  //     name: 'Visa decision', 
  //     status: progressData.visa_decision_status || 'Not started', 
  //     details: progressData.visa_decision_details || '' 
  //   },
  //   { 
  //     name: 'Application closure', 
  //     status: progressData.application_closure_status || 'Not started', 
  //     details: progressData.application_closure_details || '' 
  //   }
  // ]);

  const handleEdit = () => {
    if (!editMode) {
      // Store original values when entering edit mode
      // console.log("userdetails:",userDetails)

      setOriginalUserInfo({ ...userInfo });
    }
    setEditMode(true);
  };

  const handleSave = async () => {
    // Save logic here - will connect to API later
    try{
      const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
          return;
        }
    const data = {
      full_name: userInfo.fullName,
      primary_email: userInfo.primaryEmail,
      alternative_email: userInfo.alternativeEmail,
      contact_number: userInfo.contactNumber,
      alternative_contact: userInfo.alternativeContact,
    }
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result)
    if (result.message){
      setMessage(result.message);
    }
    console.log('Saving user info:', userInfo);
    setEditMode(false);
    setOriginalUserInfo({ ...userInfo });
  }catch(err){
    console.log("error:",err)
  }
}

  const handleCancel = () => {
    // Restore original values
    setUserInfo({ ...originalUserInfo });
    setEditMode(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('token');
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

  // If no user data, don't render anything (will redirect to login)
  // if (!userData) {
  //   return null;
  // }

  if (loading) return <div>Loading...</div>;

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
          <span className="username">{userInfo.username || 'User'}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* User Information Section */}
      <div className="user-info-section">
        {/* User Details Subsection */}
        <div className="subsection user-details">
          {/* <h3>Personal Information</h3> */}
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
              <>
              <button className="edit-button" onClick={handleEdit}>
                Edit
              </button>
              {message && (
            <div className="message">
              {message}
            </div>
          )}
              </>
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
          {/* <h3>Application Details</h3> */}
          <div className="form-group">
            <label htmlFor="nationality">Nationality</label>
            <input 
              type="text" 
              id="nationality"
              value={applicationDetails.nationality} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportNumber">Passport Number</label>
            <input 
              type="text" 
              id="passportNumber"
              value={applicationDetails.passportNumber} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportExpiry">Passport Expiry</label>
            <input 
              type="text" 
              id="passportExpiry"
              value={applicationDetails.passportExpiry} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passportType">Passport Type</label>
            <input 
              type="text" 
              id="passportType"
              value={applicationDetails.passportType} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="applicationReference">Application Reference</label>
            <input 
              type="text" 
              id="applicationReference"
              value={applicationDetails.applicationReference} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="servicePackage">Service Package</label>
            <input 
              type="text" 
              id="servicePackage"
              value={serviceDetails.servicePackage} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category"
              value={serviceDetails.category} 
              disabled
              className="readonly"
            />
          </div>
        </div>
        
        {/* Service Details Subsection */}
        {/* <div className="subsection service-details">
          <h3>Service Information</h3>
          <div className="form-group">
            <label htmlFor="servicePackage">Service Package</label>
            <input 
              type="text" 
              id="servicePackage"
              value={serviceDetails.servicePackage} 
              disabled
              className="readonly"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category"
              value={serviceDetails.category} 
              disabled
              className="readonly"
            />
          </div>
        </div> */}
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
