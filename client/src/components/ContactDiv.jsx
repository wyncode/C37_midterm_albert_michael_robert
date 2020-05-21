import React, { useState } from 'react';
import '../assets/styles/introdiv.css';
import '../assets/styles/contact.css';

const ContactDiv = () => {
  return (
    <div className="contact-div">
      <div className="contact-us">
        <h1> Get in Touch</h1>
        <form>
          <div>
            <input
              className="contact-input"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div>
            <input className="contact-input" type="text" placeholder="E-Mail" />
          </div>
          <div>
            <input className="contact-input" type="text" placeholder="Phone" />
          </div>
          <div>
            <textarea
              className="contact-message"
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button className="contact-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDiv;
