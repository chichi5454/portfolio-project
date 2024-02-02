/** @format */

import "./contactme.css";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("2zeK6PBfb_aTdRrdY"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_36z5err";
    const templateId = "lora@2024";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Email successfully sent.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-me">
      <h2>CONTACT ME</h2>
      <div className="form-page">
        <p>For Business Inquiries, Contact Me.....</p>
        <form className="for" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="">name</label>
            <input ref={nameRef} placeholder="enter your name" />
          </div>
          <div className="form_group">
            <label htmlFor="">email</label>
            <input ref={emailRef} type="email" placeholder="enter your email" />
          </div>
          <div className="form_group">
            <label htmlFor="">Message</label>
            <input ref={messageRef} placeholder="enter your message" />
          </div>
          <button className="btn" disabled={loading}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
