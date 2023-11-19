import React from 'react'

const BrandFeatures = ({className, iconClass, title}) => {
  return (
    <div className={className}>
        <i className={iconClass}></i>
        <h3>{title}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
    </div>
  )
}

export default BrandFeatures