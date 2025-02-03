import React from 'react';
import '../Homepage.css'; // Add this line to import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to the Professional Cleaners App!</h1>
      <div className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Residential Cleaning</li>
          <li>Office Cleaning</li>
          <li>Deep Cleaning</li>
          <li>Move-In/Move-Out Cleaning</li>
          <li>Carpet and Upholstery Cleaning</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
