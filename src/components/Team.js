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
        <section class="meet-team-section">
            <div class="container">
                <div class="section-title-wrapper">
                    <div class="section-title">
                        <p>Meet Our Team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                
                    <div class="browse-team">
                        {/* <a class="btn-theme btn-transparent" href="#">Browse Team<i class="fa-regular fa-arrow-up-right"></i></a> */}
                    </div>
                </div>
                <div class="team-cards">
                    <div class="team-card kristine">
                        <img src={kristine} alt=""/>
                        <h3>Kristine Palmer</h3>
                        <p>Chief Operation Officer</p>
                    </div>
                    <div class="team-card mark">
                        <img src={mark} alt=""/>
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div class="team-card kimberly">
                        <img src={kimberly} alt=""/>
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div class="team-card justin">
                        <img src={justin} alt=""/>
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
            </div>
       
            <div class="testimonial">
                <div class="testimonial-wrapper">
                    <div class="container">
                        <div class="section-title">
                            <p>Testimonial</p>
                            <h2>What Our Client Says</h2>
                        </div>

                        <div class="testimonial-cards">
                            <div class="cassandra">
                                <div>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div class="info-wrapper">
                                    <div class="testimonial-image">
                                        <img src={cassandra} alt=""/>
                                        
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Cassandra Warren</h4>
                                        <p>Busniess Manager, Dorfus</p>
                                    </div>
                                </div>
                            </div>
                            <div class="amanda">
                                <div>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div class="info-wrapper">
                                    <div class="testimonial-image">
                                        <img src={amanda} alt=""/>
                                        
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Amanda Tulling</h4>
                                        <p>Senior Developer, Square</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="jack">
                                <div>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                    <i class="fas fa-star starz"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div class="info-wrapper">
                                    <div class="testimonial-image">
                                        <img src={jack} alt=""/>                                                                  
                                    </div>

                                    <div class="testimonial-info">
                                        <h4>Jack McDogglas</h4>
                                        <p>Key Account Manager, Gobona</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="all-reviews">
                        <button class="btn-theme btn-black" href="#">All Reviews<i class="fa-regular fa-arrow-up-right"></i></button>
                    </div>
                    
                </div>

               
            </div>
        
    </section>
    </div>
  )
}

export default Team