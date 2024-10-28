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


function App() {
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
