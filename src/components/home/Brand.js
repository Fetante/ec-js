import React from 'react';
import wavyLines from '../../img/background-wavy-lines-white.svg';
import daria from '../../img/daria-pimkina-tYaccl19A3Q-unsplash.jpg';

const Brand = () => {
  return (
    <div>
      <section className="brand-section">
        <img className="wavy-lines" src={wavyLines} alt="" />
        <div className="container">
          <div className="brand-top">
            <img src="./img/paperz.svg" alt="" />
            <img src="./img/dorfus.svg" alt="" />
            <img src="./img/martino.svg" alt="" />
            <img src="./img/square.svg" alt="" />
            <img src="./img/gobona.svg" alt="" />
          </div>
        </div>

        <div className="border-div">
          <div className="container">
            <div className="brand-features">
              <div className="section-title features">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <button className="btn-theme btn-yellow btn-features" href="">
                  Learn More<i className="fa-regular fa-arrow-up-right"></i>
                </button>
              </div>

              <div className="business-advise">
                <i className="fa-light fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
              </div>

              <div className="financial-advise">
                <i className="fa-light fa-chart-mixed-up-circle-dollar"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
              </div>

              <div className="startup">
                <i className="fa-regular fa-lightbulb-exclamation-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
              </div>

              <div className="risk">
                <i className="fa-thin fa-block-brick-fire"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-about container">
          <div className="founder-img-container">
            <div className="founder-background">
              <h5>Samantha Brown,</h5>
              <span>Founder</span>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
            <img src={daria} alt="imgae of the founder" />
          </div>

          <div className="about-company section-title">
            <p>About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p className="no-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
            </p>
            <p className="no-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
            </p>

            <div className="video">
              <button className="btn-theme btn-black" href="">
                Learn More <i className="fa-regular fa-arrow-up-right"></i>
              </button>
              <div className="video-btn-container">
                <button className="play-btn"><i className="fas fa-play"></i></button>
                <span>Intro Video</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;