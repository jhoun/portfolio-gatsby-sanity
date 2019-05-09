import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <div className="contact-container">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__links">
        <div className="contact__githuh">Github</div>
        <div className="contact__linkedin">LinkedIn</div>
        <div className="contact__email">Email</div>
      </div>
    </div>
  );
};

export default Footer;
