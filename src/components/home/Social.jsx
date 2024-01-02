import React, { useState } from "react";
import "./Home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Akshat-iitk"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>{" "}
        <span className="social__small-Text">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/akshat-tiwari-5a5617248/"
        className="home__social-icon mt-3"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>{" "}
        <span className="social__small-Text">LinkedIn</span>
      </a>
    </div>
  );
};

export default Social;
