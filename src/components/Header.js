import React from 'react'
import logo from '../img/logotype.svg'

const Header = () => {
  return (
    <div>
        <header>
            <div class="container">
                <div class="logotype">
                    <img src={logo} alt="company logotype" />
                </div>
                <button class="hamburger"><i class="fa-regular fa-bars"></i></button>
                <div class="menu">
                    <div class="top-menu">
                        <div class="contact-information">
                            <div class="content-box">
                                <i class="fa-regular fa-phone-volume"></i>
                                +46 (8) 121 470 50
                            </div>
                            <div class="content-box">
                                <i class="fa-regular fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div class="content-box last">
                                <i class="fa-light fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>                        
                        </div>
                        <div class="social-media">
                            <a href="https://facebook.com" target="blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com" target="blank"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="https://instagram.com" target="blank"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://linkedin.com" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                        </div>           
                    </div>
                    <div class="main-menu">
                        <nav>
                            <a class="active" href="index.html">Home</a>
                            <a href="services.html">Service</a>
                            <a href="news.html">News</a>
                            <a href="contact.html">Contact</a>
                        </nav>
                        <div class="login">                    
                            <a class="btn-theme btn-yellow" href="login.html">Login<i class="fa-regular fa-arrow-up-right"></i></a>                        
                        </div>

                        
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header