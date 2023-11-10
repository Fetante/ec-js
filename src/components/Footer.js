import React from 'react'
import logo from '../img/logotype-white.svg'
import lines from '../img/background-lines-white-right.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        
        <div class="container">
            <div class="footer-top">
                <div class="logotype">
                    <img src={logo} alt="company logotype"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                
                <div class="company footer-links">
                    <h3>Company</h3>
                    <button href="">About</button>
                    <button href="">Features</button>
                    <button href="">Work</button>
                    <button href="">Career</button>
                </div>
                <div class="help footer-links">
                    <h3>Help</h3>
                    <button href="">Customer Support</button>
                    <button href="">Deliviry Details</button>
                    <button href="">Terms & Conditions</button>
                    <button href="">Privacy Policy</button>
                </div>
                <div class="resources footer-links">
                    <h3>Resources</h3>
                    <button href="">Free eBooks</button>
                    <button href="">Development Tutorial</button>
                    <button href="">How to - Blog</button>
                    <button href="">Youtube Playlist</button>
                </div>
                <div class="link footer-links">
                    <h3>Link</h3>
                    <button href="">Free eBooks</button>
                    <button href="">Development Tutorial</button>
                    <button href="">How to - Blog</button>
                    <button href="">Youtube Playlist</button>
                </div>
            </div>            
        </div>

        <div class="footer-bottom">
            <img class="wavy-lines" src={lines} alt=""/>
            <div class="container">
                <div class="copyrights">
                    <p>
                        © 2023 Crito - Consulting Company Inc. All Rights Reserved.
                    </p>
                </div>
                <div class="social-media">
                    <button href="https://facebook.com" target="blank"><i class="fa-brands fa-facebook"></i></button>
                    <button href="https://twitter.com" target="blank"><i class="fa-brands fa-x-twitter"></i></button>
                    <button href="https://instagram.com" target="blank"><i class="fa-brands fa-instagram"></i></button>
                    <button href="https://linkedin.com" target="blank"><i class="fa-brands fa-linkedin"></i></button>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer