import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="s2">
      <div className="main-container">
        <a href=""></a>
        <h3 className="contact_title">Get In Touch</h3>

        <form id="contact-form">
          <a name="contact"></a>

          <label>Name</label>
          <input className="input-field" type="text" name="name" />

          <label>Subject</label>
          <input className="input-field" type="text" name="subject" />

          <label>Email</label>
          <input className="input-field" type="text" name="email" />

          <label>Message</label>
          <textarea className="input-field" name="message"></textarea>

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
