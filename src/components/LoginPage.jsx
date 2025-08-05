// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import styles from './LoginPage.module.css';


// const isTokenValid = (token) => {
//   try {
//     const decoded = jwtDecode(token);
//     return decoded.exp * 1000 > Date.now(); // expiration time is in seconds
//   } catch (e) {
//     console.error('Error decoding token:', e);
//     return false;
//   }
// };  

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token && isTokenValid(token)) {
//       navigate('/home');
//     }
//   }, [navigate]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
    
//     try {
//       let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
      
//       response = await response.json();
//       console.log('Login response:', response);
      
//       if (response.access_token) {
//         // Store user data in localStorage for persistence
//         const token = response.access_token;
//         localStorage.setItem("token", token);
//         navigate('/home');
//       } else {
//         // Handle API error responses
//         setError(response.detail || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContactUs = () => {
//     navigate('/contact-us');
//   };

//   // return (
//   //   <div className={styles["login-page"]}>
//   //     <div className={styles["login-content"]}>
//   //       {/* Logo */}
//   //       <div className={styles["logo-container"]}>
//   //         <img 
//   //           src="/logo_full.png" 
//   //           alt="Immigration Portal Logo" 
//   //           className={styles["logo"]}
//   //         />
//   //       </div>

//   //       {/* Login Form */}
//   //       <form className={styles["login-form"]} onSubmit={handleLogin}>
//   //         {/* Error Message */}
//   //         {error && (
//   //           <div className={styles["error-message"]}>
//   //             {error}
//   //           </div>
//   //         )}
          
//   //         {/* Username Field */}
//   //         <div className={styles["form-group"]}>
//   //           <input
//   //             type="text"
//   //             id="username"
//   //             value={username}
//   //             onChange={(e) => setUsername(e.target.value)}
//   //             placeholder="Username"
//   //             className={styles["form-input"]}
//   //             required
//   //             disabled={loading}
//   //           />
//   //         </div>

//   //         {/* Password Field */}
//   //         <div className={styles["form-group"]}>
//   //           <input
//   //             type="password"
//   //             id="password"
//   //             value={password}
//   //             onChange={(e) => setPassword(e.target.value)}
//   //             placeholder="Password"
//   //             className={styles["form-input"]}
//   //             required
//   //             disabled={loading}
//   //           />
//   //         </div>

//   //         {/* Login Button */}
//   //         <button type="submit" className={styles["login-btn"]} disabled={loading}>
//   //           {loading ? 'Logging in...' : 'Login'}
//   //         </button>
//   //       </form>

//   //       {/* Contact Us Link */}
//   //       <button 
//   //         className={styles["contact-us-link"]}
//   //         onClick={handleContactUs}
//   //       >
//   //         Contact Us
//   //       </button>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className={styles.container}>
//       <div className={styles.backgroundImage}></div>

//       <div className={styles.content}>
//         <img src={'/logo_full_blue.png'} alt="Logo" className={styles.logo} />
//         <h2 className={styles.heading}>Secure Access Portal</h2>

//         <form className={styles.form}>
//           <input type="text" placeholder="Username" className={styles.input} />
//           <input type="password" placeholder="Password" className={styles.input} />
//           <button type="submit" className={styles.button}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useEffect, useState } from "react";
// import styles from "./LoginPage.module.css";
// // import logo from "../assets/logo.png";

// export default function LoginPage() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoaded(true);
//     }, 100); // delay for fade effect

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`${styles.container} ${loaded ? styles.loaded : ""}`}>
//       <div className={styles.overlay}></div>
//       <div className={styles.box}>
//         <img src={'/logo_full_blue.png'} alt="Authority Seal" className={styles.logo} />
//         <h1 className={styles.title}>Access Portal Interface — Level 1</h1>
//         <form className={styles.form}>
//           <div className={styles.group}>
//             <label htmlFor="username">Identifier</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter access key"
//               autoComplete="off"
//             />
//           </div>
//           <div className={styles.group}>
//             <label htmlFor="password">Passcode</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter secret sequence"
//               autoComplete="off"
//             />
//           </div>
//           <button type="submit" className={styles.button}>
//             Authenticate
//           </button>
//         </form>
//         <p className={styles.warning}>
//           Unauthorized access will be reported. Proceed only with valid
//           credentials.
//         </p>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import styles from './LoginPage.module.css';
// // import logo from './logo.png';       // Put your logo in the same folder or adjust path
// // import bgImage from './background.jpg'; // Your 1440x1440 image

// export default function LoginScreen() {
//   const [animateDone, setAnimateDone] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimateDone(true), 700); // reduce from 3500ms to 2500ms
//     return () => clearTimeout(timer);
//   }, []);
  

//   return (
//     <div className={styles.container}>
//       <img
//         src={'/bg.jpg'}
//         alt="Background"
//         className={`${styles.bgImage} ${animateDone ? styles.bgImageZoomed : ''}`}
//       />

//       <div className={`${styles.overlay} ${animateDone ? styles.overlayVisible : ''}`}>
//         <img src={'/logo_full_blue.png'} alt="Logo" className={styles.logo} />
//         <form className={styles.loginForm} onSubmit={e => e.preventDefault()}>
//           <input type="text" placeholder="Username" className={styles.input} required />
//           <input type="password" placeholder="Password" className={styles.input} required />
//           <button type="submit" className={styles.button}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { jwtDecode } from 'jwt-decode';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // expiration time is in seconds
  } catch (e) {
    console.error('Error decoding token:', e);
    return false;
  }
};  

export default function LoginPage() {
  const [animateDone, setAnimateDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const {message} = location.state || {};

  useEffect(() => {
    if (message) {
      setError(message);
    }
  }, [message]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && isTokenValid(token)) {
      navigate('/home');
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateDone(true), 700);
    return () => clearTimeout(timer);
  }, []);


    const handleContactUs = () => {
    navigate('/contact-us');
  };

  
  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      response = await response.json();
      console.log('Login response:', response);

      if (response.access_token) {
        const token = response.access_token;
        localStorage.setItem('token', token);
        navigate('/home');
      } else {
        setError(response.detail || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={'/bg.jpg'}
        alt="Background"
        className={`${styles.bgImage} ${animateDone ? styles.bgImageZoomed : ''}`}
      />

      <div className={`${styles.overlay} ${animateDone ? styles.overlayVisible : ''}`}>
        <div className={styles.logoContainer}>
        <img src={'/logo_full_blue.png'} alt="Logo" className={styles.logo} onClick={handleLogoClick}/>
        </div>
        <form className={styles.loginForm} onSubmit={handleLogin} noValidate>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            required
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={styles.input}
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <span
              className={styles.showHideIcon}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? <span><BeatLoader size={7} color="#fff"/></span> : 'Login'}
          </button>

          {error && <p className={styles.errorMessage}>{error}</p>}
          
         
          <button className={styles.contactLink} onClick={handleContactUs}>
           Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}



