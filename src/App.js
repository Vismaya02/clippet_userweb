import './App.css';
import Footer from './components/footer/components/footer';
import Header from './components/header/components/header';
import BenefitSection from './pages/home/components/Benfits';
import BrandsWorkedWith from './pages/home/components/brandsworked';
import Faqsection from './pages/home/components/FAQsection';
import HeroSection from './pages/home/components/Herosection';
import Howclippetworks from './pages/home/components/Howclippetworks';
import Staticbanner from './pages/home/components/Staticbanner';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Privacypolicy from './pages/privacypolicy/components/policypolicy';
import RefundCancellationPolicy from './pages/refundpolicy/components/refundpolicy';
import Termsandconditions from './pages/termsandconditions/components/termsandconditions';
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
