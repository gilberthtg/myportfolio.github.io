import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

function Service() {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container service_container">
        {/* Design UI/UX */}
        <article className="services">
          <div className="service_head">
            <h3>Design UI/UX</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className="services">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service;
