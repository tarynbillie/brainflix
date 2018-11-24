import React, { Component } from 'react';
import Comments from './Comments';
import Header from './Header';
import SideVideos from './SideVideos';

// added proxy of 'http://localhost:8080' so that when the fetch goes to local3000 it looks in itself, doesnt find it
// so then asks 8080 if it can do it, and it does


class Main extends Component {
    constructor() {
        super();

        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            vids: [],
            id: {
                video: 0,
                comments: []
            },
            isLoading: true,
        };
    }

    formSubmit(event, commentData) {
        event.preventDefault();
        console.log(commentData)
        const init = {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch(`/videos/${this.props.match.params.id}/comments`, init)
            .then(response => response.json(commentData))
            .then(newData => {
                fetch(`/videos/${this.props.match.params.id}`)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        id: data
                    })
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        fetch('/videos')
            .then(results => results.json())
            .then(data => {
                this.setState({
                    vids: data,
                    isLoading: false
                    // this pushes the first video of the array to appear on initial page load
                }, () => this.props.history.push(`/main/${data[0].id}`))
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            fetch(`/videos/${this.props.match.params.id}`)
                .then(results => results.json())
                .then(data => {
                    this.setState({
                        id: data,
                        isLoading: false
                    })
                })
        }
    }


    render() {
        return (
            <div>
                <Header />
                <section className="main">
                    <div className="main__first">
                        {this.state.id.video && <video className="main__frame" src={`${this.state.id.video}?api_key=taryn`} alt="main video" type="video/mp4" controls></video>}
                        <div className="main__title">
                            <h3>{this.state.id.title}</h3>
                        </div>
                        <div className="main__info">
                            <p className="views-count">{`${this.state.id.views} views`}</p>
                            <div className="icons">
                                <div>
                                    <img src='../assets/Icons/ThumbsUp.svg' alt="thumbs up"></img>
                                    <span>{this.state.id.thumbsUp}</span>
                                </div>
                                <div>
                                    <img src='../assets/Icons/ThumbsDown.svg' alt="thumbs down"></img>
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
                                <img className="author__icon" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>

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
                            <Comments comments={this.state.id.comments} formSubmit={this.formSubmit} />
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