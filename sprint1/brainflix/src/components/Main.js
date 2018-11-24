import React, { Component } from 'react';
import Comments from './Comments';


class Main extends Component {
    render() {
        return (
            <section className="main">

                <video className="main__frame" src='../assets/BrainStation Sample Video.mp4' alt="main video" type="video/mp4" controls></video>

                <div className="main__title">
                    <h3>Jose Bautista hammers go-ahead three-run shot in ALDS Game 5, delivers epic bat flip</h3>
                </div>
                <div className="main__info">
                    <p className="views-count">2,304,189 views</p>
                    <div className="icons">
                        <div>
                            <img src='../assets/Icons/Thumbs Up.svg' alt="thumbs up"></img>
                            <span>6.9K</span>
                        </div>
                        <div>
                            <img src='../assets/Icons/Thumbs Down.svg' alt="thumbs down"></img>
                            <span>202</span>
                        </div>
                        <div>
                            <img src='../assets/Icons/Share.svg' alt="share arrow"></img>
                            <span>SHARE</span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="author__info">
                    <div className="author__icon"></div>
                    <div className="author__title">
                        <h5>MLB</h5>
                        <span>Published on Oct 14, 2015</span>
                    </div>
                    <button className="author__subscribe">
                        <h5 className="first-sub">SUBSCRIBE</h5>
                        <h5 className="sec-sub">1.2M</h5>
                    </button>
                </div>
                <div className="more">
                    <span>10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5</span>
                    <span className="more__more">SHOW MORE</span>
                </div>
                <div className="divider"></div>
                <div>
                <Comments/>
                </div>






            </section>
        )
    }
}













export default Main;