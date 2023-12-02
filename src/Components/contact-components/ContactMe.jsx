/** @format */
import "./contactme.css";
import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-page-content">
        <h5>Want to work with me? Lets Connect</h5>
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
            <a href="mailto:chichi54lora@.com"> CONNECT</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
