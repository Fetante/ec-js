import React from 'react'
import kristine from '../img/kristine.jpg'
import mark from '../img/mark.jpg'
import kimberly from '../img/kimberly.jpg'
import justin from '../img/justin.jpg'
import cassandra from '../img/cassandra.jpg'
import amanda from '../img/amanda.jpg'
import jack from '../img/jack1.jpg'


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
                    <div className="team-card kristine">
                        <img src={kristine} alt=""/>
                        <h3>Kristine Palmer</h3>
                        <p>Chief Operation Officer</p>
                    </div>
                    <div className="team-card mark">
                        <img src={mark} alt=""/>
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-card kimberly">
                        <img src={kimberly} alt=""/>
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-card justin">
                        <img src={justin} alt=""/>
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
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
                            <div className="cassandra">
                                <div>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="info-wrapper">
                                    <div className="testimonial-image">
                                        <img src={cassandra} alt=""/>
                                        
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Cassandra Warren</h4>
                                        <p>Busniess Manager, Dorfus</p>
                                    </div>
                                </div>
                            </div>
                            <div className="amanda">
                                <div>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="info-wrapper">
                                    <div className="testimonial-image">
                                        <img src={amanda} alt=""/>
                                        
                                    </div>
                                    <div className="testimonial-info">
                                        <h4>Amanda Tulling</h4>
                                        <p>Senior Developer, Square</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="jack">
                                <div>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                    <i className="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="info-wrapper">
                                    <div className="testimonial-image">
                                        <img src={jack} alt=""/>                                                                  
                                    </div>

                                    <div className="testimonial-info">
                                        <h4>Jack McDogglas</h4>
                                        <p>Key Account Manager, Gobona</p>
                                    </div>
                                </div>
                                
                            </div>
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