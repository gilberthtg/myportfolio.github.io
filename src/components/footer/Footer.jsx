import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        GALUNG
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experince">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#library">Library</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com/gilbert.hutacalung.5">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/gilbert_htg25">
          <FaInstagram />
        </a>
        <a href="https://github.com/gilberthtg">
          <FaGithub />
        </a>
        <a href="https://twitter.com/gilbert_htg">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; GALUNG Web, All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
