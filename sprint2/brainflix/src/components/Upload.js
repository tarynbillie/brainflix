import React, { Component } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';


export default class Upload extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="uploads">
                    <Link to={'/uploadstatus'}>
                        <button className="uploads__button">
                            <img src="../assets/Icons/Large Upload.svg" alt="upload icon"></img>
                            <h2>Select files to upload</h2>
                            <h3>Or drag and drop video files</h3>
                        </button>
                    </Link>
                </section>
            </div>
        )
    }
}
