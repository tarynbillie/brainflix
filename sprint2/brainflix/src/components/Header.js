import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
    // define functions in here
    render() {
        // define arrays here
        return (
            <section className="hero">
            <Link to={'/main'}>
                <img className="logo" src='../assets/Icons/BrainFlix Logo.svg' alt="brainFlix logo"></img>
            </Link>
                <div className="search">
                    <input className="bar" type="text" placeholder="Search" />
                    <button>
                        <img className="mag" src='../assets/Icons/Search.svg' alt="search"></img>
                    </button>
                </div>
                <div className="user">
                    <Link to={'/upload'}>
                            <img className="upload" src='../assets/Icons/Content Upload.svg' alt="upload button"></img>
                    </Link>
                    <img className="johnG" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>
                </div>
            </section>
        )
    }
}



















export default Header;