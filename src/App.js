import React from 'react';
import './App.css';
import Sidemenu from './components/sidemenu/Sidemenu'
import Section from './components/section/Section'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Work from './components/work/Work'
import { Element} from "react-scroll";


function App() {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidemenu/>
      </div>
      <div className="mainPage">
        <Element id="intro" className="element">
        <Section  content={<Home/>}/>
        </Element>
        <Element id="services" className="element">
        <Section content={<Services/>}/>
        </Element>
        <Element id="work" className="element">
        <Section content={<Work/>}/>
        </Element>
      </div>
    </div>
  );
}

export default App;
