import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        
        <div class="container">
            <div class="footer-top">
                <div class="logotype">
                    <img src="./img/logotype-white.svg" alt="company logotype"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                    </p>
                </div>
                
                <div class="company footer-links">
                    <h3>Company</h3>
                    {/* <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Work</a>
                    <a href="">Career</a> */}
                </div>
                <div class="help footer-links">
                    <h3>Help</h3>
                    {/* <a href="">Customer Support</a>
                    <a href="">Deliviry Details</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a> */}
                </div>
                <div class="resources footer-links">
                    <h3>Resources</h3>
                    {/* <a href="">Free eBooks</a>
                    <a href="">Development Tutorial</a>
                    <a href="">How to - Blog</a>
                    <a href="">Youtube Playlist</a> */}
                </div>
                <div class="link footer-links">
                    <h3>Link</h3>
                    {/* <a href="">Free eBooks</a>
                    <a href="">Development Tutorial</a>
                    <a href="">How to - Blog</a>
                    <a href="">Youtube Playlist</a> */}
                </div>
            </div>            
        </div>

        <div class="footer-bottom">
            <img class="wavy-lines" src="./img/background-lines-white-right.svg" alt=""/>
            <div class="container">
                <div class="copyrights">
                    <p>
                        © 2023 Crito - Consulting Company Inc. All Rights Reserved.
                    </p>
                </div>
                <div class="social-media">
                    {/* <a href="https://facebook.com" target="blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="blank"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="blank"><i class="fa-brands fa-linkedin"></i></a> */}
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer