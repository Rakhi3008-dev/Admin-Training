
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Admin Training Portal. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact :- +91 9988776655</Link></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
          
        </nav>
      </div>
    </footer>
  );
};

export default Footer;