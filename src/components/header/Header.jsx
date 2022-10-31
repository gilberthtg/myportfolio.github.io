import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import ME from "../../asset/tipografi.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gilbert Hutagalung</h1>
        <h5 className="text-alight">Novice Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img
            className="profil"
            src={ME}
            alt="Gilbert Hutagalung"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>

        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
      </div>
      <div className="space"></div>
    </header>
  );
};

export default Header;
