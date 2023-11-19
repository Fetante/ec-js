import React from 'react'
import kristine from '../../img/kristine.jpg'
import mark from '../../img/mark.jpg'
import kimberly from '../../img/kimberly.jpg'
import justin from '../../img/justin.jpg'
import cassandra from '../../img/cassandra.jpg'
import amanda from '../../img/amanda.jpg'
import jack from '../../img/jack1.jpg'
import EmployeeCard from './EmployeeCard'
import TestimonialCard from './TestimonialCard'


const Team = () => {
  return (
    <div>
        <section className="meet-team-section">
            <div className="container">
                <div className="section-title-wrapper">
                    <div className="section-title">
                        <p>Meet Our Team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                
                    <div className="browse-team">
                        {/* <a className="btn-theme btn-transparent" href="#">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a> */}
                    </div>
                </div>
                <div className="team-cards">
                    <EmployeeCard className="kristine" imgUrl={kristine} title="Kristine Palmer" text="Chief Operation Officer" />
                    <EmployeeCard className="mark" imgUrl={mark} title="Mark Aubri" text="Senior Consultant" />
                    <EmployeeCard className="kimberly" imgUrl={kimberly} title="Kimberly Hansen" text="Senior Consultant" />
                    <EmployeeCard className="justin" imgUrl={justin} title="Justin Willoman" text="Senior Tech Consultant" />                   
                </div>
            </div>
       
            <div className="testimonial">
                <div className="testimonial-wrapper">
                    <div className="container">
                        <div className="section-title">
                            <p>Testimonial</p>
                            <h2>What Our Client Says</h2>
                        </div>

                        <div className="testimonial-cards">
                            <TestimonialCard className="cassandra" imgUrl={cassandra} title="Cassandra Warren" text="Business Manager, Dorfus" />                            
                            <TestimonialCard className="amanda" imgUrl={amanda} title="Amanda Tulling" text="Senior Developer, Square" />
                            <TestimonialCard className="jack" imgUrl={jack} title="Jack McDogglas" text="Key Account Manager, Gobona" />                            
                        </div>
                    </div>
                    
                    <div className="all-reviews">
                        <button className="btn-theme btn-black" href="#">All Reviews<i className="fa-regular fa-arrow-up-right"></i></button>
                    </div>
                    
                </div>

               
            </div>
        
    </section>
    </div>
  )
}

export default Team