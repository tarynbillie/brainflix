import React, { Component } from 'react'
import Header from './Header';


export default class UploadStatus extends Component {

    render() {
        return (
            <div>
                <Header />
                <section className="upload-body">
                    <div className="upload-body__status-body">
                        <div className="video-up">
                            <img src="../assets/Images/hqdefault.jpg" alt="video that is uploading"></img>
                            <h1>Upload Status:</h1>
                            <h2>Processing...</h2>
                        </div>
                        <form>
                            <h1>Basic Information</h1>
                            <label>
                                Title:
                                <input className="title-input" type="text" placeholder="Add a title to your video"></input>
                            </label>
                            <label>
                                Description:
                                <textarea className="description-input" type="text" row="3" placeholder="Add a description of your video"></textarea>
                            </label>
                            <button>
                                <h3>PUBLISH</h3>
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
