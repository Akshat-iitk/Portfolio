import React, { useState } from "react";
import "./Home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Vedantadlak/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>{" "}
        <span className="social__small-Text">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/vedant-adlak-4158a8257/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>{" "}
        <span className="social__small-Text">LinkedIn</span>
      </a>
      <a
        href="https://instagram.com/vedant_adlak21?igshid=NGExMmI2YTkyZg"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram-alt"></i>{" "}
        <span className="social__small-Text">Instagram</span>
      </a>
    </div>
  );
};

export default Social;
