import React from 'react';
import "../../style/contact.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="sub-heading">Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone Number" />
          <select required>
            <option value="">Service Of Interest</option>
            <option value="webDesign">Web Design</option>
            <option value="development">Development</option>
            <option value="seo">SEO</option>
          </select>
        </div>
        <div className="form-row">
          <textarea placeholder="Project Details..." rows={5}></textarea>
        </div>
        {/* Wrap the button in button-container div */}
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
