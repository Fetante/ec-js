import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({dateNumber, month, imgObj, text, title}) => {
  return (
    <Link to="/news">
      <div className="business-card">
          <div className="img-container">
              <div className="date-sticker">
                  <p className="date-number">{dateNumber}</p>
                  <p>{month}</p>
              </div>
              <img src={imgObj} alt=""/>
          </div>
          <p>{text}</p>                
          <h3>{title}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
    </Link>
  )
}

export default NewsCard