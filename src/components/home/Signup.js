import React from 'react'
import wavyLines from '../../img/background-wavy-lines.svg'

const Signup = () => {
  return (
    <div>
        <section className="signup-section">
        <img className="wavy-lines" src={wavyLines} alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>

            <div className="subscribe"> 
                <input type="text" placeholder="username@domain.com"/>
                <button className="btn-theme btn-yellow" href="">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
           
        </div>
    </section>
    </div>
  )
}

export default Signup