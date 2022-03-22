import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/bootstrap.css";
import "./css/styles.css";

import Header from "./component/Header";
import AlertSection from './component/AlertSection';
import SectionOne from "./component/SectionOne";
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import SectionFour from './component/SectionFour';
import SectionFive from './component/SectionFive';
import SectionSix from './component/SectionSix';
import Footer from "./component/Footer";
import Youtube from './component/Youtube';
import Iphones from "./component/Iphones";
import Four04 from "./component/Four04";

function App() {
  return (
    <Router>
    <Header/>
      <div>

        <Routes>
        <Route path="/" element={<><AlertSection/> <SectionOne/> <SectionTwo /> <SectionThree /> <SectionFour />  <SectionFive />  <SectionSix /> <SectionSix />  </> }/>
        <Route path="/youtube" element={<Youtube />} /> 
        <Route path="/error" element={<Four04 />} />
        <Route path="/iphone" element={<Iphones />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;