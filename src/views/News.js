import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/news/Showcase'
import Signup from '../components/Signup'
import Articles from '../components/news/Articles'

const News = () => {
  return (
    <div className="wrapper">
      <Header />
      <Showcase />
      <Articles />
      <Signup />
      <Footer />
    </div>
  )
}

export default News