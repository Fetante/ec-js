import React from 'react'

const GlobalProject = ({img, alt, title}) => {
  return (
    <article>
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
        <button href="">Read More <i className="fa-regular fa-arrow-up-right"></i></button>

    </article>
)
}

export default GlobalProject