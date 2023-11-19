import React from 'react'
import backgroundLines from '../../img/background-lines.svg'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <div>
        <section className="connect-showcase-section">            
            <div className="lets-connect">
                <img className="wavy-lines" src={backgroundLines} alt=""/>
                <div className="container">
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/contacts">Contact</Link>                        
                    </div>
                    <h1>Let's Connect</h1>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Showcase