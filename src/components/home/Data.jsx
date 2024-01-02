import React from "react";
import Typewriter from "typewriter-effect";

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title inline">
        Akshat Tiwari
         </h1>
      <h3 className="home__subtitle">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Web Ethusiast")
              .pauseFor(3000)
              .deleteAll()
              .typeString("Machine Learning Enthusiast")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </h3>
      <p className="home__description">
        I'm a Web development enthusiast specializing in <b>MERN</b> stack  with experience in computer vision and image processing, I combine technology and visual data analysis to deliver innovative solutions.
      </p> 

      <a href="#contact" className="button button--flex hover:scale-105">
        Say Hello{" "}
         </a>
    </div>
  );
};
