import React from 'react'
import logo from '../../img/logotype.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <div className="logotype">
                    <img src={logo} alt="company logotype" />
                </div>
                <button className="hamburger"><i className="fa-regular fa-bars"></i></button>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="fa-regular fa-phone-volume"></i>
                                +46 (8) 121 470 50
                            </div>
                            <div className="content-box">
                                <i className="fa-regular fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div className="content-box last">
                                <i className="fa-light fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>                        
                        </div>
                        <div className="social-media">
                            <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>           
                    </div>
                    <div className="main-menu">
                    <nav>
                        <Link to="/" className="active">Home</Link>
                        <Link to="/services">Service</Link>
                        <Link to="/news">News</Link>
                        <Link to="/contacts">Contact</Link>
                    </nav>
                        <div className="login">                    
                            <a className="btn-theme btn-yellow" href="login">Login<i className="fa-regular fa-arrow-up-right"></i></a>
                        </div>                        
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header