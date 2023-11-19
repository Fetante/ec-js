import React from 'react'
import choose from '../../img/choose.jpg'
import ChooseOption from './ChooseOption'

const Choose = () => {
  return (
    <div>
         <section className="choose-section">
            <div className="container">
                <div className="section-title">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    
                    <div className="choose-grid">
                        <ChooseOption iconClass="fa-light fa-thumbs-up" className="excellence" title="Process Excellence" />
                        <ChooseOption iconClass="fa-sharp fa-regular fa-gem" className="planning" title="Strategic Planning" />
                        <ChooseOption iconClass="fa-light fa-circle-nodes" className="design" title="Experience Design" />
                        <ChooseOption iconClass="fa-light fa-head-side-gear" className="ai" title="Artificial Inteligence" />                        
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