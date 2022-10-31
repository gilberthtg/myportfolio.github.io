import React from "react";
import "./library.css";
import Computer1 from "../../asset/computer1.jpg";
import Computer2 from "../../asset/computer2.jpg";
import Computer3 from "../../asset/computer3.jpg";
import Computer4 from "../../asset/computer4.jpg";
import Computer5 from "../../asset/computer5.jpg";
import Computer6 from "../../asset/computer6.jpg";

const Testimonial = () => {
  return (
    <section id="library">
      <h5>A Project I Made In</h5>
      <h2>My Library</h2>
      <div className="container library_container">
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
        >
          <div className="library_img">
            <img src={Computer1} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <div className="library_img">
            <img src={Computer2} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <div className="library_img">
            <img src={Computer3} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-delay="150"
        >
          <div className="library_img">
            <img src={Computer4} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className="library_img">
            <img src={Computer5} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article
          className="library_item"
          data-aos="flip-right"
          data-aos-duration="500"
          data-aos-delay="250"
        >
          <div className="library_img">
            <img src={Computer6} alt="Computer" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="library_item-cta">
            <a
              href="https://github.com/gilberthtg"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
