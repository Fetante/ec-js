import React from 'react'
import Header from '../components/home/Header'
import Showcase from '../components/news/Showcase'
import Article from '../components/newsDetails/Article'
import News from '../components/home/News'
import Footer from '../components/home/Footer'



const NewsDetails = () => {


  return (
    <div>
      <Header />
      <Showcase />
      <Article />
      <News backgroundColor="#f0efe9"/>
      <Footer />
    </div>
  )
}

export default NewsDetails