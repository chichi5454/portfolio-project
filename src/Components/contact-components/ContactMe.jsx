/** @format */
import "./contactme.css";
import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-page-content">
        <h5>For Business Inquiries, Contact Me..... {""}</h5>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
          <input type="text" placeholder="Enter Message" />
          <button>
            <a href="mailto:chichi54lora@.com"> SEND</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
