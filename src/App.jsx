import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import ServiceDetailsPage from './components/ServiceDetailsPage'
import ContactUsPage from './components/ContactUsPage'
import './App.css'
import MainPage from './components/MainPageUpdated'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/service-details" element={<ServiceDetailsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
