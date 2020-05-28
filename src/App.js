import React from 'react';
import './App.css';
import Sidemenu from './components/sidemenu/Sidemenu'
import Section from './components/section/Section'
import Home from './components/home/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import { Link,Element, animateScroll as scroll } from "react-scroll";


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
        <Element id="about" className="element">
        <Section content={<About/>}/>
        </Element>
        <Element id="work" className="element">
        <Section content={<Work/>}/>
        </Element>
      </div>
    </div>
  );
}

export default App;
