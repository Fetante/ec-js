import React from 'react'
import choose from '../../img/choose.jpg'

const Choose = () => {
  return (
    <div>
         <section className="choose-section">
            <div className="container">
                <div className="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    
                    <div className="choose-grid">
                        <i className="fa-light fa-thumbs-up"></i>
                        <div className="excellence">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        
                        <i className="fa-sharp fa-regular fa-gem"></i>
                        <div className="planning">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        
                        <i className="fa-light fa-circle-nodes"></i>
                        <div className="design">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        <i className="fa-light fa-head-side-gear"></i>
                        <div className="ai">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>

                <div className="choose-img-container">
                    
                    <img src={choose} alt=""/>
                    <div className="background-area-color"></div>
                </div>
                
            </div>
            <div className="background-element"></div>
        </section>
    </div>
  )
}

export default Choose