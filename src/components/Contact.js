import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;