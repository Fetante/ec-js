import React from 'react'
import logo from '../../img/logotype-white.svg'
import lines from '../../img/background-lines-white-right.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        
        <div className="container">
            <div className="footer-top">
                <div className="logotype">
                    <img src={logo} alt="company logotype"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                
                <div className="company footer-links">
                    <h3>Company</h3>
                    <button href="">About</button>
                    <button href="">Features</button>
                    <button href="">Work</button>
                    <button href="">Career</button>
                </div>
                <div className="help footer-links">
                    <h3>Help</h3>
                    <button href="">Customer Support</button>
                    <button href="">Deliviry Details</button>
                    <button href="">Terms & Conditions</button>
                    <button href="">Privacy Policy</button>
                </div>
                <div className="resources footer-links">
                    <h3>Resources</h3>
                    <button href="">Free eBooks</button>
                    <button href="">Development Tutorial</button>
                    <button href="">How to - Blog</button>
                    <button href="">Youtube Playlist</button>
                </div>
                <div className="link footer-links">
                    <h3>Link</h3>
                    <button href="">Free eBooks</button>
                    <button href="">Development Tutorial</button>
                    <button href="">How to - Blog</button>
                    <button href="">Youtube Playlist</button>
                </div>
            </div>            
        </div>

        <div className="footer-bottom">
            <img className="wavy-lines" src={lines} alt=""/>
            <div className="container">
                <div className="copyrights">
                    <p>
                        © 2023 Crito - Consulting Company Inc. All Rights Reserved.
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer