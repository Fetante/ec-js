import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/news/Showcase'
import Article from '../components/newsDetails/Article'
import News from '../components/News'
import Footer from '../components/Footer'



const NewsDetails = () => {


  return (
    <div>
      <Header />
      <Showcase />
      <Article />
      <News />
      <Footer />
    </div>
  )
}

export default NewsDetails