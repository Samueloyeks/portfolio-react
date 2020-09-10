import React, { Component } from 'react';
import './Sidemenu.css'
import { Link} from "react-scroll";


class Sidemenu extends Component {
    render() {
        return (
            <div className="sidemenu">
                <div className="avatarSection">
                    <div className="imageContainer">
                    <img onClick={this.scrollToTop} alt=""/>
                    </div>
                </div>
                {/* <h2>Samuel Oyekeye</h2> */}
                <a className="contact" target="blank"  href="mailto:sammyoyekeye70@gmail.com"><i className="fa fa-envelope icon"></i>sammyoyekeye70@gmail.com</a><br/>
                <a className="contact" target="blank" href=" "><i className="fa fa-phone icon"></i>07016769222</a><br/>
                <a className="contact"  target="blank" href="https://www.linkedin.com/in/sam-oyekeye-a5877a133"><i className="fa fa-linkedin icon"></i>https://www.linkedin.com/in/sam-oyekeye-a5877a133</a><br/>
                <a className="contact" target="blank" href="https://github.com/Samueloyeks"><i className="fa fa-github icon"></i>https://github.com/Samueloyeks</a><br/>
                <a className="contact" target="blank" href="https://github.com/Samueloyeks"><i className="fa fa-dribbble icon"></i>samoyekeye.com</a><br/>


                <ul className="nav-items">
                    <li className="nav-item"><Link to="intro" activeClass="active" smooth spy offset={-70} duration= {500}>Home</Link></li> 
                    <li className="nav-item"><Link to="services" activeClass="active" spy smooth offset={-70} duration= {500}>My Services</Link></li>
                    <li className="nav-item"><Link  to="work" activeClass="active" spy smooth offset={-70} duration= {500}>Portfolio</Link></li>
                </ul>

            </div>
        );
    }
}

export default Sidemenu;