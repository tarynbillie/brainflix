import React from 'react';
import CommentsInfo from './CommentsInfo';




class Comments extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            comment: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        let commentsPost = null
        if (this.props.comments !== undefined) {
            commentsPost = this.props.comments.map((commentInfo, index) => {
                return <CommentsInfo key={index} name={commentInfo.name}
                    timestamp={commentInfo.timestamp}
                    comment={commentInfo.comment} />
            })
        }

        return (
            <section className="comments">
                <div className="comments__user">
                    <img className="johnG" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>

                    <form onSubmit={(event) => this.props.formSubmit(event, this.state)}>
                        <textarea className="input" name="comment" type="text" placeholder="Add a public comment" onChange={this.handleChange} />

                        <div className="button">
                            <button className="button__cancel">CANCEL</button>
                            <button className="button__post" type="submit" value="Post">COMMENT</button>
                        </div>
                    </form>
                </div>
                <div className="posted-container">
                    {commentsPost}
                </div>

            </section>

        )
    }
}

export default Comments;