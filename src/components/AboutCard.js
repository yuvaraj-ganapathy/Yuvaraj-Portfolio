import React from "react";
import "./AboutCard.css";
import photo from "../assets/yuvaraj.jpg";
import Resume from "../assets/Resume.pdf";

function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="aboutimg">
        <img className="aboutimg" src={photo}></img>
      </div>
      <span>YUVARAJ G</span>
      <p className="aboutinfo">
        BTech CSE(Hons) student at KL University, passionate about coding and
        building projects from scratch.<br></br>
        <br></br>Web developer with a love for continuous
        learning and embracing new technologies.
      </p>
      <div className="aboutshare">
        <a
          href="https://github.com/yuvaraj-ganapathy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="github" color="white"></box-icon>
        </a>
        <a
          href="https://www.instagram.com/u1__yuvi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="instagram" color="white"></box-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/yuvaraj76/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="linkedin-square" color="white"></box-icon>
        </a>
      </div>
      <a href={Resume} download="yuvaraj-resume.pdf">
        <button className="about-btn">Download Resume</button>
      </a>
    </div>
  );
}

export default AboutCard;
