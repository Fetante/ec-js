import '../App.css';
import React from 'react'
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Showcase from '../components/home/Showcase';
import Brand from '../components/home/Brand';
import { Services } from '../components/home/Services';
import Choose from '../components/home/Choose';
import Projects from '../components/home/Projects';
import Team from '../components/home/Team';
import News from '../components/home/News';
import Signup from '../components/home/Signup';


const Home = () => {
  return (    
    <div className='wrapper'>
        <Header />
        <Showcase />
        <Brand />
        <Services />
        <Choose />
        <Projects />
        <Team />
        <News backgroundColor="#fff"/>
        <Signup />
        <Footer />
    </div>
  )
}

export default Home