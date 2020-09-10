import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="intro">
                    <h1 className="littleText">Hello,</h1>
                    <h1 className="bigText">I am Joy Essien</h1>
                    <p className="introText">
                        I’m a UI/UX Designer based in Nigeria. I enjoy creating
                        experiences that are easy to use, logical and visually
                        represented beautifully.
                    </p>
                    <div className="buttons">
                        <a target="blank" href="mailto:sammyoyekeye70@gmail.com" className="buttonLink"><div className="hireButton"><p>Hire me</p></div></a>
                        <a target="blank" href="mailto:sammyoyekeye70@gmail.com" className="buttonLink"><div className="cvButton"><p>Download my CV</p></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;