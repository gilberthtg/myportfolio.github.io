import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiCustomerService2Line, RiMessage2Line } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#service">
        <RiCustomerService2Line />
      </a>
      <a href="#contact">
        <RiMessage2Line />
      </a>
    </nav>
  );
};

export default Nav;
