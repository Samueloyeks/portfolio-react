import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="intro">
                <h1 className="bigText">Hi!</h1>
                <h1 className="bigText">I'm Sam</h1>
                <a target="blank" href="mailto:sammyoyekeye70@gmail.com" className="buttonLink"><div className="button"><p>Message me</p></div></a>
                </div>
            </div>
        );
    }
}

export default Home;