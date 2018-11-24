import React, { Component } from 'react';
import Comments from './Comments';
import Header from './Header';
import SideVideos from './SideVideos';

const baseUrl = 'https://project-2-api.herokuapp.com'
const apiKey = '?api_key=3d27158d-b70f-4c5a-8488-a915955d3e60'


class Main extends Component {
    state = {
        vids: [],
        id: {},
        comments: [],
        isLoading: true,
    };

    componentDidMount() {
        fetch(baseUrl + '/videos' + apiKey)
            .then(results => results.json())
            .then(data => {
                this.setState({
                    vids: data,
                    isLoading: false
                    // this pushes the first video of the array to appear on initial page load
                }, () => this.props.history.push(`/main/${data[0].id}`))
            })
    }

    componentDidUpdate(prevprops, prevState) {
        if (prevState.id.id !== this.props.match.params.id) {
            fetch(baseUrl + `/videos/${this.props.match.params.id}` + apiKey)
                .then(results => results.json())
                .then(data => {
                    this.setState({
                        id: data,
                        isLoading: false
                    })
                })

            // .catch(err => {
            //     console.log(err)
            //     alert("Ruh Roh! No video with that id exists")
            // });
            // console logs prevState as correct id array but looping, to fix infinity loop wrap 
            // set state in a condition
        }
    }


    render() {
        return (
            <div>
                <Header />
                <section className="main">
                    <div className="main__first">
                        <video className="main__frame" src={`${this.state.id.video}${apiKey}`} alt="main video" type="video/mp4" controls></video>
                        <div className="main__title">
                            <h3>{this.state.id.title}</h3>
                        </div>
                        <div className="main__info">
                            <p className="views-count">{`${this.state.id.views} views`}</p>
                            <div className="icons">
                                <div>
                                    <img src='../assets/Icons/Thumbs Up.svg' alt="thumbs up"></img>
                                    <span>{this.state.id.thumbsUp}</span>
                                </div>
                                <div>
                                    <img src='../assets/Icons/Thumbs Down.svg' alt="thumbs down"></img>
                                    <span>{this.state.id.thumbsDown}</span>
                                </div>
                                <div>
                                    <img src='../assets/Icons/Share.svg' alt="share arrow"></img>
                                    <span>SHARE</span>
                                </div>
                            </div>
                        </div>
                        <div className="author">
                            <div className="author__info">
                                <div className="author__icon"></div>
                                <div className="author__title">
                                    <h5>MLB</h5>
                                    <span>Published on Oct 14, 2015</span>
                                </div>
                                <button className="author__subscribe">
                                    <h5 className="first-sub">SUBSCRIBE</h5>
                                    <h5 className="sec-sub">{this.state.id.subscriberCount}</h5>
                                </button>
                            </div>
                            <div className="description">
                                <span>{this.state.id.description}</span>
                                <span className="description__more">SHOW MORE</span>
                            </div>
                        </div>
                        <div className='comment-container'>
                            <Comments comments={this.state.id.comments} />
                        </div>
                    </div>
                    <div className="side-container">
                        <SideVideos vids={this.state.vids} />
                    </div>
                </section>
            </div>
        )

    }
}

export default Main;