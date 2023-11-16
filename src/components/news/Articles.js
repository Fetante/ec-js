import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Articles = () => {

// Hämta alla artiklar med fetch
const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles()
}, [])

const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
    setArticles(await result.json())
}

// Loopa ut alla artiklar i en grid.

  return (
    <>
    <div className="all-articles container">
        <h2>Our News & Articles</h2>
        <div className="articles">
            
            {
            articles.map(article => (
                <Link key={article.id} to={`/news/${article.id}`}>
                    <div className="article-item" key={article.id}>
                        <img src={article.imageUrl} alt={article.title} />
                        <p>{article.category}</p>
                        <h3>{article.title}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </Link>
            ))
            }
        </div>
    </div>
    </>
    
  )
}

export default Articles