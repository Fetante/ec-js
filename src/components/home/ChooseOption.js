import React from 'react'

const ChooseOption = ({iconClass, className, title}) => {
  return (
    <>
        <i className={iconClass}></i>
        <div className={className}>
            <h3>{title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
    </>

  )
}

export default ChooseOption