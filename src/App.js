import './App.css';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div className='sm:'>
   <Home/>
   <AboutUs/>
   <Cards/>
   <Footer/>
    </div>
  );
}

export default App;
