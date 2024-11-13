import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='Contact' className="contact-container">
      <div className="contact-grid md:grid-cols2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in">
            Get in touch
          </h2>
          <p className="contact-text" data-aos="zoom-in">
            I'm always open to new opportunities and collaborations! If you have any questions, suggestions, or would like to connect, feel free to reach out. You can fill out the contact form, or drop me a message. I look forward to hearing from you!
          </p>

          <div className="contact-flex" data-aos="zoom-in">
            <AiOutlineMail size={24} /> xyz@example.com
          </div>
          <div className="contact-flex" data-aos="zoom-in">
            <BsTelephone size={24} /> +92 234 567 890
          </div>
          <div className="contact-flex" data-aos="zoom-in">
            <FaXTwitter size={24} /> @FrontendAnnas
          </div>

          
          <div className="contact-space">
            <div className="form" data-aos="zoom-in">
              <label htmlFor="name">Name</label>
              <input type="text" className="input-field" id="name" />
            </div>

            <div className="form" data-aos="zoom-in">
              <label htmlFor="email">Email</label>
              <input type="text" className="input-field" id="email" />
            </div>

            <div className="form" data-aos="zoom-in">
              <label htmlFor="msg">Message</label>
              <textarea className="text-area" id="msg" rows={8}></textarea>
            </div>

            <button className="button" data-aos="zoom-in">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
