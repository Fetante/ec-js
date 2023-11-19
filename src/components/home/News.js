import React from 'react'
import business from '../../img/business1.jpg'
import business2 from '../../img/business2.jpg'
import business3 from '../../img/business3.jpg'
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';



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
                <Link to="/news" className="btn-theme btn-transparent">
                    Browse Articles<i className="fa-regular fa-arrow-up-right"></i>               
                </Link>
            </div>

            <div className="business-card-wrapper">
                <NewsCard dateNumber="25" month="Mar" imgObj={business} text="Business" title="How To Use Digitalization In The Classroom" />
                <NewsCard dateNumber="17" month="Mar" imgObj={business2} text="Business" title="How To Implement Chat GPT In Your Projects" />
                <NewsCard dateNumber="13" month="Mar" imgObj={business3} text="Business" title="The Guide To Support Modern CSS Design" />
            </div>

        </div>
    </section>
    </div>
  )
}

export default News