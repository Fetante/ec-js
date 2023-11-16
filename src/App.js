import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Contacts from './views/Contacts'
import News from './views/News'
import NewsDetails from './views/NewsDetails'
import NotFound from './views/NotFound';


// import Header from './components/Header';
// import Footer from './components/Footer';
// import Showcase from './components/Showcase';
// import Brand from './components/Brand';
// import { Services } from './components/Services';
// import Choose from './components/Choose';
// import Projects from './components/Projects';
// import Team from './components/Team';
// import News from './components/News';
// import Signup from './components/Signup';




function App() {
  return (

  //  <div className='wrapper'>
  //     <Header />
  //     <Showcase />
  //     <Brand />
  //     <Services />
  //     <Choose />
  //     <Projects />
  //     <Team />
  //     <News />
  //     <Signup />
  //     <Footer />
  //  </div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/contacts' element={ <Contacts/> } />
        <Route path='/news' element={ <News/> } />
        <Route path='news/:id' element={ <NewsDetails/> } />
        {/* <Route path='/news/:articleId' element={NewsDetails}></Route> */}
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
