import React from 'react'
import growBusiness from '../../img/grow-business.jpg'
import client from '../../img/client.jpg'
import educate from '../../img/educate.jpg'
import insights from '../../img/insights.jpg'


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
                <article>
                    <img src={growBusiness} alt="Business man reading a business newspaper"/>
                    <h3>Grow your business</h3>
                    <button href="">Read More <i className="fa-regular fa-arrow-up-right"></i></button>

                </article>
                <article>
                    <img src={client} alt="Tablet, smart watch and glasses on a desk"/>
                    <h3>Why your client needs a responsive website</h3>
                    <button href="">Read More <i className="fa-regular fa-arrow-up-right"></i></button>
                </article>
                <article>
                    <img src={educate} alt="Desktop with a laptop, a mug, a pen and paper. "/>
                    <h3>Educate your employees to get better results</h3>
                    <button href="">Read More <i className="fa-regular fa-arrow-up-right"></i></button>
                </article>
                <article> 
                    <img src={insights} alt="Laptop with charts on a desk"/>
                    <h3>Business insights is a important piece of your business</h3>
                    <button href="">Read More <i className="fa-regular fa-arrow-up-right"></i></button>
                </article>
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