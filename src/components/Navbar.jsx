// Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // for active link styling
import './Navbar.css';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Application', path: '/home' },
  { name: 'About Us', path: '/service-details' },
  { name: 'Contact Us', path: '/contact-us' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu on link click (especially mobile)
  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <nav class="navbar navbar-expand-l sticky-top" data-bs-theme="dark">
  <div class="container-fluid justify-content-around me-4 me-sm-0">
    {/* <div className='d-flex align-items-center justify-content-between column-gap-0 me-'> */}
    
    <button class="navbar-toggler custom-toggler align-self-start me-s-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img 
          src="/logo_full (3)-cropped.svg" 
          alt="Immigration Portal Logo" 
          className="navbar-logo"
          onClick={handleLogoClick}
        /></a>
    {/* </div> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      {navLinks.map(({name,path}) => (
        <li class="nav-item" key={name}>
          <button class={`nav-link ${location.pathname == path ? 'active' : ''}`} onClick={()=>{navigate(path)}}>{name}</button>
        </li>
      ))   
        }
        
      </ul>
    </div>
  </div>
</nav>
  );
}
