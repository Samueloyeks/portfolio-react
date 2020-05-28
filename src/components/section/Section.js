import React, { Component } from 'react';
import './Section.css'

class Sidemenu extends Component {
    render() {
        return (
            <div className="body">
                {this.props.content}
            </div> 
        );
    }
}

export default Sidemenu;