import React from 'react';
import "../../style/aboutme.css"
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { FaMicrosoft, FaFigma } from 'react-icons/fa';


const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="content">
        <div className="profile-image">
          {/* Placeholder for Profile Image */}
          <img src="/closeup.avif" alt="Profile" />
        </div>
        <div className="text">
          <p>
            I am a Web Developer with over a year of hands-on experience in creating dynamic, 
            user-friendly websites. Skilled in HTML, CSS, JavaScript, Tailwind CSS, and Next.js,
            I specialize in building responsive designs that adapt seamlessly across devices. 
            Continuously learning and evolving, I am currently pursuing an IT diploma under the 
            Governor's Initiative for Artificial Intelligence, Web 3.0, and Metaverse (GIAIC).
          </p>
          <button className="download-cv">Download CV</button>
        </div>
      </div>
      <div className="skills">
        <div className="skill-card">
          <FaFigma className="icon" />
          <p>80%<br />Figma</p>
        </div>
        <div className="skill-card">
          <DiJavascript1 className="icon" />
          <p>60%<br />JavaScript</p>
        </div>
        <div className="skill-card">
          <SiTailwindcss className="icon" />
          <p>75%<br />Tailwind CSS</p>
        </div>
        <div className="skill-card">
          <SiNextdotjs className="icon" />
          <p>70%<br />Next JS</p>
        </div>
        <div className="skill-card">
          <FaMicrosoft className="icon" />
          <p>95%<br />MS Office</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
