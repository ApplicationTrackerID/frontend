import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to send message here
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }
    const response = await fetch('http://127.0.0.1:8000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result)
    if (result.message){
      setMessage(result.message);
    }
    console.log('Sending message:', formData);
    // For now, just log the form data - will implement actual API call later
  };

  const handleTrackApplication = () => {
    navigate('/login');
  };

  return (
    <div className="contact-us-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <div className="logo-container">
            <img 
              src="/src/assets/images/logo.png" 
              alt="Immigration Portal Logo" 
              className="logo"
            />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        <div className="main-content">
          
          <form className="contact-form" onSubmit={handleSendMessage}>
            {/* Your Name Field */}
            {message && (
            <div className="message">
              {message}
            </div>
          )}
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>

            {/* Your Email Field */}
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>

            {/* Your Message Field */}
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="form-textarea"
                rows="6"
                required
              />
            </div>

            {/* Send Message Button */}
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </form>

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

export default ContactUsPage;
