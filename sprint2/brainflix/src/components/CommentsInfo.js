import React, { Component } from 'react'

class CommentsInfo extends Component {

    render() {


        return (
            <div className="comment-post">
                <img src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>
                <div className="comment-post__contain">
                    <div className="comment-post__usercontain">
                        <h3>
                            {this.props.name}
                        </h3>

                        <h4>
                            {this.props.timestamp}
                        </h4>
                    </div>
                    <div className="comment-post__comment">
                        <p>
                            {this.props.comment}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentsInfo;
