import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/youssef-elzahar/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/youssef-elzahar
          </a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:youssefalzahar12@gmail.com">youssefalzahar12@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+201271885939">+20 127 188 5939</a>
        </p>
      </div>

      {/* Contact Form */}

    </div>
  );
};

export default Contact;
