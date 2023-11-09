import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Brand from './components/Brand';
import { Services } from './components/Services';
import Choose from './components/Choose';
import Projects from './components/Projects';
import Team from './components/Team';
import News from './components/News';
import Signup from './components/Signup';




function App() {
  return (

   <div className='wrapper'>
      <Header />
      <Showcase />
      <Brand />
      <Services />
      <Choose />
      <Projects />
      <Team />
      <News />
      <Signup />
      <Footer />
   </div>

  );
}

export default App;
