import React from 'react'
import business from '../img/business1.jpg'
import business2 from '../img/business2.jpg'
import business3 from '../img/business3.jpg'

const News = () => {
  return (
    <div>
        <section class="news-section">
        <div class="container">
            <div class="title-wrapper">
                <div class="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Article & News</h2>
                </div>
                <div class="browse-articles">
                    <button class="btn-theme btn-transparent" href="">Browse Articles<i class="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </div>

            <div class="business-card-wrapper">

                <div class="business-card">
                    <div class="img-container">
                        <div class="date-sticker">
                            <p class="date-number">25</p>
                            <p>Mar</p>
                        </div>
                        <img src={business} alt=""/>
                    </div>
                    <p>Business</p>                
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div class="business-card">
                    <div class="img-container">
                        <div class="date-sticker">
                            <p class="date-number">17</p>
                            <p>Mar</p>
                        </div>
                        <img src={business2} alt=""/>
                    </div>                    
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div class="business-card">
                    <div class="img-container">
                        <div class="date-sticker">
                            <p class="date-number">13</p>
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