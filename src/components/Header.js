// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="nav-bar">
        <a href=""><h1 className="main-logo">Medium</h1></a>
        <ul>
          <li className="temp"> <a href="#">Our story</a></li>
          <li className="temp"><a href="#">Membership</a></li>
          <li className="temp"><a href="#">Write</a></li>
          <li className="temp2"><a href="sign-in.html">Sign in</a></li>
          <button className="bt">Get Started</button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
