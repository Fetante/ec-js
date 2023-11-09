import React from 'react'

const Projects = () => {
  return (
    <div>
        <section class="project-and-case-section">
        <div class="container">
            <div class="section-title">
                <p>Project and Case Studies</p>
                <h2>Let`s Looks Our Global Projects</h2> 
            </div>
            <div class="project-and-cases">
                <article>
                    <img src="./img/grow-business.jpg" alt="Business man reading a business newspaper"/>
                    <h3>Grow your business</h3>
                    {/* <a href="">Read More <i class="fa-regular fa-arrow-up-right"></i></a> */}

                </article>
                <article>
                    <img src="./img/client.jpg" alt="Tablet, smart watch and glasses on a desk"/>
                    <h3>Why your client needs a responsive website</h3>
                    {/* <a href="">Read More <i class="fa-regular fa-arrow-up-right"></i></a> */}
                </article>
                <article>
                    <img src="./img/educate.jpg" alt="Desktop with a laptop, a mug, a pen and paper. "/>
                    <h3>Educate your employees to get better results</h3>
                    {/* <a href="">Read More <i class="fa-regular fa-arrow-up-right"></i></a> */}
                </article>
                <article> 
                    <img src="./img/insights.jpg" alt="Laptop with charts on a desk"/>
                    <h3>Business insights is a important piece of your business</h3>
                    {/* <a href="">Read More <i class="fa-regular fa-arrow-up-right"></i></a> */}
                </article>
            </div>
            <div class="all-projects">
                {/* <a class="btn-theme btn-black" href="">All Recent Projects <i class="fa-regular fa-arrow-up-right"></i></a> */}
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default Projects