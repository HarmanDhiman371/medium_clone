// src/components/MainSection.js
import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <div className="part-2">
      <div className="inner1">
        <h1 className="main-heading">Human <br /> Stories & ideas</h1>
        <p className="heading-subtext">A place to read, write, and deepen your understanding</p>
        <button className="start-reading-btn">Start reading</button>
      </div>
      <div className="inner2">
      <img src="/images/image.png" className="img-m" alt="img" />

      </div>
    </div>
  );
}

export default MainSection;
