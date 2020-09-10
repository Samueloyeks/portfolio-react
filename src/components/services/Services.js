import React, { Component } from 'react';
import ServiceView from '../utils/ServiceView'
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div >
                <h1>Services</h1>
                <div className="flex-container">
                    <ServiceView />
                    <ServiceView />
                    <ServiceView />
                </div>
            </div>
        );
    }
}

export default Services;