import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogoutSplashScreen.css";

export default function LogoutScreen() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out 1 second before redirect
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    const redirectTimer = setTimeout(() => {
      navigate("/"); // Redirect after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className={`logout-screen ${fadeOut ? "fade-out" : ""}`}>
      <a class="navbar-brand" href="#"><img 
          src="/logo_full (3)-cropped.svg" 
          alt="Immigration Portal Logo" 
          className="logo"
        /></a>
      <div className="logout-message">
        <h2>You have been logged out successfully</h2>
      </div>
    </div>
  );
}
