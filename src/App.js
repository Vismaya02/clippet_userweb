import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import BenefitSection from './components/home/Benfits';
import BrandsWorkedWith from './components/home/brandsworked';
import Faqsection from './components/home/FAQsection';
// import Designcategory from './components/home/Designcategory';
import HeroSection from './components/home/Herosection';
import Howclippetworks from './components/home/Howclippetworks';
import Staticbanner from './components/home/Staticbanner';


function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <BrandsWorkedWith/>
    {/* <Designcategory/> */}
    <BenefitSection/>
    <Staticbanner/>
    <Howclippetworks/>
    <Faqsection/>
    <Footer/>
    </>
  );
}

export default App;
