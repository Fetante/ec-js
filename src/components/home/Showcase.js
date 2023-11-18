import React from 'react'
import showcaseImage from '../../img/showcase-image.svg';
import backgroundLines from '../../img/background-lines.svg';

const Showcase = () => {
  return (
    <div>
        <section className="showcase-section">
            <img className="wavy-lines" src={backgroundLines} alt=""/>
            <div className="container">
                <div className="showcase-text">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value propostion nad turn them into testable prototypes</p>               
            </div>
            <div className="showcase-img">
                <img src={showcaseImage} alt="Well dressed man looking at a tablet"/>
            </div>
            
         </div>
        </section>
    </div>
  )
}

export default Showcase