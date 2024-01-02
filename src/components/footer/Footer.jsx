import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title font-semibold ">AKSHAT Tiwari</h1>
        <ul className="footer__list">
          <li className=" hover:scale-105">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className=" hover:scale-105">
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li className=" hover:scale-105">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/akshat-iitk/"
            className="home__social-icon"
            target="_blank"
          >
            <i class="bx bxl-github"></i>{" "}
            <span className="social__small-Text">Github</span>
          </a>
          <a
            href="https://codeforces.com/profile/captain1729"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bx-code-alt"></i>{" "}
            <span className="social__small-Text">Codeforces</span>
          </a>
          <a
            href="https://www.codechef.com/users/akshat_2k22"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bx-code-alt"></i>{" "}
            <span className="social__small-Text">CodeChef</span>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Akshat Tiwari. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
