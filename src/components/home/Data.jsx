import React from "react";
import Typewriter from "typewriter-effect";

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title inline">
        Vedant Adlak
         </h1>
      <h3 className="home__subtitle">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!!!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Web Developer.")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </h3>
      <p className="home__description">
        I'm a Full Stack Web Developer specializing in <b>MERN</b> stack  with experience in computer vision and image processing, I combine technology and visual data analysis to deliver innovative solutions.
      </p> 

      <a href="#contact" className="button button--flex">
        Say Hello{" "}
         </a>
    </div>
  );
};
