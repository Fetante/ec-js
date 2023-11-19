import React from 'react';
import ContactCard from './ContactCard';

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="card-container">
          <ContactCard className="visit" iconClassName="location fa-sharp fa-light fa-location-dot" title="Visit us" text1="Sveavägen 31" text2="111 34 Stockholm" />
          <ContactCard className="call" iconClassName="phone fa-regular fa-envelope" title="Call us" text1="+46 (8) 121 470 50" text2="+46 (8) 121 470 51" />
          <ContactCard className="email" iconClassName="email fa-regular fa-phone-volume" title="Email us" text1="info@crito.com" text2="support@crito.com" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;