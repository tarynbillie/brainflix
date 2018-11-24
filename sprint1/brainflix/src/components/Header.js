import React, { Component } from 'react';
// import brainFlix from '../../public/assets/Icons/BrainFlix Logo.svg';
// import search from '../../public/assets/Icons/Search.svg';
// import upload from '../../public/assets/Icons/Content Upload.svg';
// import userIcon from '../../public/assets/Images/john_gibbons.jpg';


class Header extends Component {
    // define functions in here
    render() {
        // define arrays here
        return (
            <section className="hero">
                <img className="logo" src='../assets/Icons/BrainFlix Logo.svg' alt="brainFlix logo"></img>

                <div className="search">
                    <input className="bar" type="text" placeholder="Search" />
                    <button>
                        <img className="mag" src='../assets/Icons/Search.svg' alt="search"></img>
                    </button>
                </div>

                <div className="user">
                    <img className="upload" src='../assets/Icons/Content Upload.svg' alt="upload button"></img>
                    <img className="johnG" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>
                </div>
            </section>
        )
    }
}



















export default Header;