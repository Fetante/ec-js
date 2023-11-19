import React from 'react'
import growBusiness from '../../img/grow-business.jpg'
import client from '../../img/client.jpg'
import educate from '../../img/educate.jpg'
import insights from '../../img/insights.jpg'
import GlobalProject from './GlobalProject'


const Projects = () => {
  return (
    <div>
        <section className="project-and-case-section">
        <div className="container">
            <div className="section-title">
                <p>Project and Case Studies</p>
                <h2>Let`s Looks Our Global Projects</h2> 
            </div>
            <div className="project-and-cases">
                <GlobalProject img={growBusiness} alt="Business man reading a business newspaper" title="Grow your business" />
                <GlobalProject img={client} alt="Tablet" title="Why your client needs a responsive website" />
                <GlobalProject img={educate} alt="Desktop with a laptop, a mug, a pen and paper." title="Educate your employees to get better results" />
                <GlobalProject img={insights} alt="Laptop with charts on a desk" title="Business insights is a important piece of your business" />
            </div>
            <div className="all-projects">
                <button className="btn-theme btn-black" href="">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Projects