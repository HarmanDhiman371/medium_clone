// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li><a href="#">Help</a></li>
          <li className="ft-l"><a href="#">Status</a></li>
          <li><a href="#">About</a></li>
          <li className="ft-l"><a href="#">Careers</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
