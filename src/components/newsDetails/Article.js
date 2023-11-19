import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useArticles } from '../../contexts/ArticleContext'; 

const Article = () => {
    const { id } = useParams();
    const { article, getArticle } = useArticles();
    
    useEffect(() => {
        getArticle(id)
    }, [])
    
    
    const formattedDate = article?.published
    ? format(new Date(article.published), 'MMM dd, yyyy')
    : '';


  return (
    <>
        <div className="container article-wrapper">
            <div className="article-card">
                {
                    article ? 
                    (
                        <>
                            <h2>{article.title}</h2>
                            <p>{formattedDate}</p>
                            <p className="yellow-circle"></p>
                            <p>{article.category}</p>
                            <p className="yellow-circle"></p>
                            <p>{article.author}</p>
                            <img src={article.imageUrl} alt="bild-titel" />
                            <p className="article-text">
                                {article.content}
                            </p>
                        </>
                    )
                    :
                    (
                        <div>
                            Laddar
                        </div>
                    )
                }
                

                <div className="quotes">
                    <div className="icon-quotes">
                        <i className="fa-solid fa-apostrophe"></i> 
                        <i className="fa-solid fa-apostrophe"></i>
                    </div>
                    <blockquote>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    </blockquote>
                </div>

                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                </p>

                <button className="popular-searchword">Digitalization</button>
                <button className="popular-searchword">School</button>
                <button className="popular-searchword">IT</button>
                <button className="popular-searchword">Design</button>
                <button className="popular-searchword">Work</button>
                <button className="popular-searchword">Tech</button>

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