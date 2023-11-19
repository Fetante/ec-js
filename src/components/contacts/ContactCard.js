import React from 'react'

const ContactCard = ({className, iconClassName, title, text1, text2}) => {
  return (
    <div className={`card ${className}`}>
            <i className={iconClassName}></i>
            <div className="card-contacts">
              <h3>{title}</h3>
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
  )
}

export default ContactCard