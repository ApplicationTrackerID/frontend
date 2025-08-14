import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactUsPage.module.css';
import { BeatLoader } from 'react-spinners';
import Navbar from './Navbar';


const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [error, setError] = useState('');

  // console.log('success', success)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendMessage = async (e) => {
    try{
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result)
    if (result.message){
      setMessage('Thank you for contacting ApplicationTracker.ID.\nYour message has been sent successfully.');
      setSuccess(true);
    }
    console.log('Sending message:', formData);
  }catch{
    console.log('Error sending message')
  }
  finally{
    setLoading(false);
  }
  };

  const handleTrackApplication = () => {
    navigate('/login');
  };


  return (
    <div className={styles["contact-us-page"]}>
      {/* Header Section */}
      {/* <div className={styles["header-section"]}>
        <div className={styles["header-content"]}>
          <div className={styles["logo-container"]} onClick={handleLogoClick}>
            <img 
              src="/logo_full (3)-cropped.svg" 
              alt="Immigration Portal Logo" 
              className={styles["logo"]}
            />
          </div>
        </div>
      </div> */}
      
      <Navbar />
      
      {/* Main Section */}
      <div className={styles["main-section"]}>
        <div className={styles["main-content"]}>
          {!success ? (
          <form className={styles["contact-form"]} onSubmit={handleSendMessage}>
            {/* Your Name Field */}
            {message && (
            <div className={styles["message"]}>
              {message}
            </div>
          )}
            <div className={styles["form-group"]}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={styles["form-input"]}
                required
                disabled={loading}
              />
            </div>

            {/* Your Email Field */}
            <div className={styles["form-group"]}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={styles["form-input"]}
                required
                disabled={loading}
              />
            </div>

            {/* Your Message Field */}
            <div className={styles["form-group"]}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className={styles["form-textarea"]}
                rows="6"
                required
                disabled={loading}
              />
            </div>

            {loading && <div className={styles.loader} ><BeatLoader color="#1D2F5D" size={7} /></div>}
            

            <button type="submit" className={styles["send-message-btn"]} disabled={loading}>
              Send Message
            </button>
          </form>
          ): <div className={styles["message"]}>
          {message}
        </div>}
          <button 
            className={styles["track-application-btn"]}
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
