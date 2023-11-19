import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
    setArticles(await result.json());
  };

  // Funktion för att formatera datumet
  const formatDate = (publishedDate) => {
    const date = new Date(publishedDate);
    
    // Få månaden som en förkortning (t.ex. "Oct")
    const month = date.toLocaleString('en-US', { month: 'short' });
    
    // Få dagen som en siffra
    const day = date.getDate();
  
    return (
      <>
        <h5 className="date-number">{day}</h5>
        <p className="date-month">{month}</p>
        
      </>
    );
  };

  return (
    <>
      <div className="all-articles container">
        <h2>Our News & Articles</h2>
        <div className="articles">
          {articles.map((article) => (
            <Link key={article.id} to={`/news/${article.id}`}>
              <div className="article-item" key={article.id}>
                <div className="img-container">
                  <div className="date-sticker">
                    {formatDate(article.published)}
                  </div>
                  <img src={article.imageUrl} alt={article.title} />
                </div>
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;