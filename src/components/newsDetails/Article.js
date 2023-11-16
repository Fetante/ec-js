import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    
    // 1. Hämta artikeln från apiet med det särskilda id't

    

    // Hämta alla artiklar med fetch
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            
            if (result.status === 200)
                setArticle(await result.json())
        }

    }
    // 2. 



  return (
    <>
        <div className="container article-wrapper">
            <div className="article-card">
                <h2>{article.title}</h2>
                <p>artikel datum</p>
                <p>artikel kategori</p>
                <p>artikel författare</p>
                <img src="" alt="bild-titel" />
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
            </p>

            <blockquote>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </blockquote>

            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
            </p>

            </div>

            <div className="article-aside">
                <input type="text" placeholder="Sök..." ></input>

                <div className="recent-posts">
                    
                    <h3>Recent Posts</h3>
                    <div className="posts">                        
                        <h4>How To Blow Through Capital At An Incredible Rate</h4>
                        <p>Jan 14 2020</p>
                    </div>
                    <div className="posts">                        
                        <h4>Design Studios That Everyone Should Know About?</h4>
                        <p>Jan 14 2020</p>
                    </div>
                    <div className="posts">                        
                        <h4>How did we get 1M+ visitors in 30 days without anything!</h4>
                        <p>Jan 14 2020</p>
                    </div>
                    <div className="posts">                       
                        <h4>Figma On Figma: How We Built Our Website Design System</h4>
                        <p>Jan 14 2020</p>
                    </div>                    
                </div>

                <div className="categories">
                    <p><strong>Technology</strong> - 20 Posts</p> 
                    <p><strong>Freelancing</strong> - 07 Posts</p> 
                    <p><strong>Writing</strong> - 16 Posts</p> 
                    <p><strong>Marketing</strong> - 11 Posts</p> 
                    <p><strong>Business</strong> - 35 Posts</p> 
                    <p><strong>Education</strong> - 14 Posts</p> 
                </div>
            

            </div>
        </div>
    </>
  
  )
}

export default Article