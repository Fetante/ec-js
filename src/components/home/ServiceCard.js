import React from 'react'

const ServiceCard = ({ title, className}) => {
  return (
    <div className={`card active ${className}`}>
        <p></p>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <div className="arrow-link">
            <button className="btn-round" href=""><i className="fa-thin fa-arrow-right"></i></button>
        </div>
        
    </div>
  )
}

export default ServiceCard