import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qabhglh",
      "template_57vsupo",
      form.current,
      "1WlUBZOcbT5QeBMfh"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>gilberthutagalung1@gmail.com</h5>
            <a href="mailto:gilberthutagalung1@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+62852 9700 0036</h5>
            <a href="https://wa.me/6285297000036?text=Hai%20I'm%20from%20your%20portfolio%F0%9F%91%8D">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Gilbert Hutagalung</h5>
            <a href="https://m.me/gilbert.hutagalung.5">Send a message</a>
          </article>
        </div>

        {/* ===FROM=== */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
