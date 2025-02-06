import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';  

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cleaners">View Cleaners</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
