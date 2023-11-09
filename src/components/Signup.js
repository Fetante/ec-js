import React from 'react'

const Signup = () => {
  return (
    <div>
        <section className="signup-section">
        <img className="wavy-lines" src="./img/background-wavy-lines.svg" alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>

            <div className="subscribe"> 
                <input type="text" placeholder="username@domain.com"/>
                {/* <a className="btn-theme btn-yellow" href="">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a> */}
                </div>
           
        </div>
    </section>
    </div>
  )
}

export default Signup