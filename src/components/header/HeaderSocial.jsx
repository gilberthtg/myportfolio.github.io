import React from "react";
import "./header.css";
import { BsGithub, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://github.com/">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/gilbert_htg25">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/gilbert.hutagalung.5">
        <BsFacebook />
      </a>
      <a href="https://twitter.com/Gilbert_htg">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
