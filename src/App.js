import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import BrandsWorkedWith from './components/home/brandsworked';
import HeroSection from './components/home/Herosection';


function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <BrandsWorkedWith/>
    <Footer/>
    </>
  );
}

export default App;
