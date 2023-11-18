import React from 'react'

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
                    <div className="card business-card active">
                        <p></p>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="arrow-link">
                            <button className="btn-round" href=""><i className="fa-thin fa-arrow-right"></i></button>
                        </div>
                        
                    </div>
                    <div className="card startup-card active">
                        <p></p>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="arrow-link">
                            <button className="btn-round" href=""><i className="fa-thin fa-arrow-right"></i></button>
                        </div>                </div>
                    <div className="card financial-card active">
                        <p></p>
                        <h3>Financial Advise</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="arrow-link">
                            <button className="btn-round" href=""><i className="fa-thin fa-arrow-right"></i></button>
                        </div>                </div>
                    <div className="card risk-card active">
                        <p></p>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="arrow-link">
                            <button className="btn-round" href=""><i className="fa-thin fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="btn-services">
                    <button className="btn-theme btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
                
            </div>

        </section>
    </div>
  )
}
