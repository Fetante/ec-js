import React from 'react';
import wavyLines from '../../img/background-wavy-lines-white.svg';
import daria from '../../img/daria-pimkina-tYaccl19A3Q-unsplash.jpg';
import paperz from '../../img/paperz.svg';
import dorfus from '../../img/dorfus.svg';
import martino from '../../img/martino.svg';
import square from '../../img/square.svg';
import gobona from '../../img/gobona.svg';
import Button from '../shared/Button';
import BrandFeatures from './BrandFeatures';

const Brand = () => {
  return (
    <div>
      <section className="brand-section">
        <img className="wavy-lines" src={wavyLines} alt="" />
        <div className="container">
          <div className="brand-top">
            <img src={paperz} alt="" />
            <img src={dorfus} alt="" />
            <img src={martino} alt="" />
            <img src={square} alt="" />
            <img src={gobona} alt="" />
          </div>
        </div>

        <div className="border-div">
          <div className="container">
            <div className="brand-features">
              <div className="section-title features">
                <p>Features</p>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <Button className="btn-theme btn-yellow btn-features" title="Learn More" type="button" />                
              </div>

              <BrandFeatures className="business-advise" iconClass="fa-light fa-handshake" title="Business Advice" />
              <BrandFeatures className="financial-advise" iconClass="fa-light fa-chart-mixed-up-circle-dollar" title="Financial Advice" />
              <BrandFeatures className="startup" iconClass="fa-regular fa-lightbulb-exclamation-on" title="Startup Business" />
              <BrandFeatures className="risk" iconClass="fa-thin fa-block-brick-fire" title="Risk Management" />
            
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