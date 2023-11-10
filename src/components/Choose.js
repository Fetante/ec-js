import React from 'react'
import choose from '../img/choose.jpg'

const Choose = () => {
  return (
    <div>
         <section class="choose-section">
            <div class="container">
                <div class="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    
                    <div class="choose-grid">
                        <i class="fa-light fa-thumbs-up"></i>
                        <div class="excellence">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        
                        <i class="fa-sharp fa-regular fa-gem"></i>
                        <div class="planning">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        
                        <i class="fa-light fa-circle-nodes"></i>
                        <div class="design">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        <i class="fa-light fa-head-side-gear"></i>
                        <div class="ai">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>

                <div class="choose-img-container">
                    
                    <img src={choose} alt=""/>
                    <div class="background-area-color"></div>
                </div>
                
            </div>
            <div class="background-element"></div>
        </section>
    </div>
  )
}

export default Choose