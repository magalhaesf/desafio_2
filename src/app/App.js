import React, { Component } from 'react';
import Slider from './Slider';
import What from './What';
import Test from './Test';
import Cont from './Cont';
import ActiveMenuLink from 'active-menu-link';
import './style.scss';

class App extends Component {

    componentDidMount() {
        new ActiveMenuLink(".menu");
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="menu">
                        <div className="nav-wrapper">
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#what">What We Do?</a></li>
                                <li><a href="#test">Testimonial</a></li>
                                <li><a href="#cont">Contact Us</a></li>
                            </ul>
                            <a href="#" className="brand-logo center">Plathanus</a>
                            <form>
                                <div className="input-field right">
                                    <input id="search" type="search" required/>
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
                <Slider/>
                <What/>
                <Test/>
                <Cont/>
            </div>
        )
    }
}

export default App;