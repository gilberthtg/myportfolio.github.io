import React from "react";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#about" className="btn">
        About Me
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
