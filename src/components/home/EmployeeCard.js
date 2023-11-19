import React from 'react'

const EmployeeCard = ({className, imgUrl, title, text}) => {
  return (
    <div className={`team-card ${className}`}>
        <img src={imgUrl} alt=""/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default EmployeeCard