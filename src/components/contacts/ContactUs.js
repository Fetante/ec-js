import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="card-container">
          <div className="card visit">
            <i className="location fa-sharp fa-light fa-location-dot"></i>
            <div className="card-contacts">
              <h3>Visit us</h3>
              <p>Sveavägen 31</p>
              <p>111 34 STOCKHOLM</p>
            </div>
          </div>
          <div className="card call">
            <i className="phone fa-regular fa-envelope"></i>
            <div className="card-contacts">
              <h3>Call us</h3>
              <p>+46 (8) 121 470 50</p>
              <p>+46 (8) 121 470 51</p>
            </div>
          </div>
          <div className="card email">
            <i className="email fa-regular fa-phone-volume"></i>
            <div className="card-contacts">
              <h3>Email us</h3>
              <p>info@crito.com</p>
              <p>support@crito.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;