import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>React JS</h4>
                <small>Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Vue JS</h4>
                <small>Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince_backend">
          <h3>Backend Development</h3>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
              <h4>PHP</h4>
              <small>Experience</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
              <h4>MySQL</h4>
              <small>Experience</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_detail-icon" />
            <div>
              <h4>Laravel</h4>
              <small>Experience</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
