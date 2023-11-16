import React from 'react'
import backgroundLines from '../../img/background-lines.svg'

const Showcase = () => {
  return (
    <div>
        <section className="connect-showcase-section">            
            <div className="lets-connect">
                <img className="wavy-lines" src={backgroundLines} alt=""/>
                <div className="container">
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="news">News</a>
                    </div>
                    <h1>News & Articles</h1>                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Showcase