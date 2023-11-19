import React from 'react'

const TestimonialCard = ({className, imgUrl, title, text}) => {
  return (
    <div className={className}>
        <div>
            <i className="fas fa-star starz"></i>
            <i className="fas fa-star starz"></i>
            <i className="fas fa-star starz"></i>
            <i className="fas fa-star starz"></i>
            <i className="fas fa-star starz"></i>
        </div>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
        <div className="info-wrapper">
            <div className="testimonial-image">
                <img src={imgUrl} alt=""/>
                
            </div>
            <div className="testimonial-info">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard