import React from "react";
import "./about.css";
import ME from "../../asset/tipografi.png";
import { FaAward } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Khow</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="Gilbert Hutagalung" className="about_img" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>still just getting started</small>
            </article>
            <article className="about_card">
              <MdOutlinePeopleAlt className="about_icon" />
              <h5>Client</h5>
              <small>0 Client</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>0 Project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            facilis ullam commodi dignissimos amet ab ratione error impedit ut,
            earum fugit quaerat repudiandae, asperiores officiis quidem sapiente
            mollitia, quisquam unde.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
