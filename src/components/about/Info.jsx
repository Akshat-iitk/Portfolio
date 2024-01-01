import React from "react";
import { FaGraduationCap } from "react-icons/fa";
const Info = () => {
  return (
    <div className="about__info grid ">
      <div className="about__box items-center flex flex-col hover:scale-95 cursor-pointer about__icon">
      <FaGraduationCap size={30}/>
       <h3 className=" text-sm opacity-85">Education</h3>
       <p className="text-sm opacity-75">I am 3rd year undergrade at <b>IIT Kanpur</b></p>
      </div>
      <div className="about__box hover:scale-95 cursor-pointer">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Contributed in</h3>
        <span className="about__subtitle">10+ Projects in the field of ML and Web Dev</span>
      </div>

   
      <div className="about__box hover:scale-95 cursor-pointer">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Always happy to help</h3>
        <span className="about__subtitle">
          {" "}
          Open to collaborating alongside a great team with wonderful ideas
        </span>
      </div>
    </div>
  );
};

export default Info;
