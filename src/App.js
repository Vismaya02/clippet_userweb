import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import BenefitSection from './components/home/Benfits';
import BrandsWorkedWith from './components/home/brandsworked';
import Faqsection from './components/home/FAQsection';
import HeroSection from './components/home/Herosection';
import Howclippetworks from './components/home/Howclippetworks';
import Staticbanner from './components/home/Staticbanner';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Privacypolicy from './components/privacypolicy/policypolicy';
import RefundCancellationPolicy from './components/refundpolicy/refundpolicy';
import Termsandconditions from './components/termsandconditions/termsandconditions';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function App() {

  const handlescrollup = () =>{
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling
    });
  }

  return (
    <>
    <Router>
    <Routes>
       <Route path ="/" element={<>
            <Header/>
            <HeroSection/>
            <BrandsWorkedWith/>
            <BenefitSection/>
            <Staticbanner/>
            <Howclippetworks/>
            <Faqsection/>
            <div className="scrolltotop" onClick={handlescrollup}>
              <ArrowDropUpIcon/>
              <p style={{marginBottom:"5px"}}>Back to top</p>
            </div>
            <Footer/>
         </>}>
       </Route>    
        <Route path="/privacypolicy" element= {<Privacypolicy/>}></Route>
        <Route path="/refundpolicy" element= {<RefundCancellationPolicy/>}></Route>
        <Route path="/termsandconditons" element= {<Termsandconditions/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
