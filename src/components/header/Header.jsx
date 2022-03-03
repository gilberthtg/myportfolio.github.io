import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../asset/tipografi.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gilbert Hutagalung</h1>
        <h5 className="text-alight">Novice Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Gilbert Hutagalung" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
