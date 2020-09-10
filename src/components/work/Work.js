import React, { Component } from 'react';
import './Work.css'
import project1 from '../../assets/imgs/project1.png'
import project2 from '../../assets/imgs/project2.png'

class Work extends Component {
    render() {
        return (
            <div>
                <h1>My Recent Projects</h1>
                <div className="flex-container">
                    <div className="img-container">
                        <img src={project1} className="img" />
                    </div>

                    <div className="content">
                        <p>Abunch of stuff</p>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="content">
                        <p>Abunch of stuff</p>
                    </div>

                    <div className="img-container">
                        <img src={project2} className="img" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;