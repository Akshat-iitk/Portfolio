import React from "react";
import "./About.css";

import Info from "./Info";


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <div className="about__img">
        
        </div>

        <div className="about__data">
          <Info />

          <p className="about__description">
            I'm a full stack web developer focused on building functional,
            beautiful, and scalable websites. I have built various types of full
            stack projects. I have experience in using HTML, CSS, JS, React JS,
            Mongo, etc to build websites and applications.With expertise in computer vision and image processing, I combine technology and visual data analysis to deliver innovative solutions.
            Always eager to learn more. 
          </p>

          <a
            href="https://drive.google.com/drive/folders/16IU8Vly2tZRyeJZ6XY6-7D4KnSEF5EF2"
            target="_blank"
            className="button button--flex"
          >
            Resume
           
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
