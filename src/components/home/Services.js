import React from 'react'
import ServiceCard from './ServiceCard'

export const Services = () => {
  return (
    <div>
        <section className="service-section">
            <img className="wavy-lines" src="./img/background-lines-right.svg" alt=""/>
            <div className="container">
                <div className="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="card-content">
                    <ServiceCard title="Business Advice" className="business-card" />
                    <ServiceCard title="Startup Business" className="startup-card" />
                    <ServiceCard title="Financial Advice" className="financial-card" />
                    <ServiceCard title="Risk Management" className="risk-card" />                    
                </div>
                <div className="btn-services">
                    <button className="btn-theme btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
                
            </div>

        </section>
    </div>
  )
}
