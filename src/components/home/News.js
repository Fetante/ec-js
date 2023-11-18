import React from 'react'
import business from '../../img/business1.jpg'
import business2 from '../../img/business2.jpg'
import business3 from '../../img/business3.jpg'

const News = ({backgroundColor }) => {
  return (
    <div>
        <section style={{ backgroundColor }}className="news-section">
        <div className="container">
            <div className="title-wrapper">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Article & News</h2>
                </div>
                <div className="browse-articles">
                    <button className="btn-theme btn-transparent" href="">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </div>

            <div className="business-card-wrapper">

                <div className="business-card">
                    <div className="img-container">
                        <div className="date-sticker">
                            <p className="date-number">25</p>
                            <p>Mar</p>
                        </div>
                        <img src={business} alt=""/>
                    </div>
                    <p>Business</p>                
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="business-card">
                    <div className="img-container">
                        <div className="date-sticker">
                            <p className="date-number">17</p>
                            <p>Mar</p>
                        </div>
                        <img src={business2} alt=""/>
                    </div>                    
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="business-card">
                    <div className="img-container">
                        <div className="date-sticker">
                            <p className="date-number">13</p>
                            <p>Mar</p>
                        </div>
                        <img src={business3} alt=""/>
                    </div>                    
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default News