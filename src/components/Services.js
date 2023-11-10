import React from 'react'

export const Services = () => {
  return (
    <div>
        <section class="service-section">
            <img class="wavy-lines" src="./img/background-lines-right.svg" alt=""/>
            <div class="container">
                <div class="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div class="card-content">
                    <div class="card business-card active">
                        <p></p>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-link">
                            <button class="btn-round" href=""><i class="fa-thin fa-arrow-right"></i></button>
                        </div>
                        
                    </div>
                    <div class="card startup-card active">
                        <p></p>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-link">
                            <button class="btn-round" href=""><i class="fa-thin fa-arrow-right"></i></button>
                        </div>                </div>
                    <div class="card financial-card active">
                        <p></p>
                        <h3>Financial Advise</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-link">
                            <button class="btn-round" href=""><i class="fa-thin fa-arrow-right"></i></button>
                        </div>                </div>
                    <div class="card risk-card active">
                        <p></p>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div class="arrow-link">
                            <button class="btn-round" href=""><i class="fa-thin fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="btn-services">
                    <button class="btn-theme btn-transparent">Browse Services<i class="fa-regular fa-arrow-up-right"></i></button>
                </div>
                
            </div>

        </section>
    </div>
  )
}
