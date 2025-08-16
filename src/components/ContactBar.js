import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactBar.css";

const ContactBar = () => {
  return (
    <nav className="contact-bar">
      <a
        href="https://www.linkedin.com/in/youssef-elzahar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" /> LinkedIn
      </a>
      <a href="mailto:youssefalzahar12@gmail.com">
        <FaEnvelope className="icon" /> Gmail
      </a>
      <a href="tel:+201271885939">
        <FaPhone className="icon" /> Phone
      </a>
    </nav>
  );
};

export default ContactBar;
