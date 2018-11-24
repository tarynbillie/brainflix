import React from 'react';
import CommentsInfo from './CommentsInfo';




class Comments extends React.Component {


    render() {
        let comments = null
        if (this.props.comments !== undefined) {
            comments = this.props.comments.map((commentInfo) => {
                return <CommentsInfo name={commentInfo.name}
                    timestamp={commentInfo.timestamp}
                    comment={commentInfo.comment} />
            })
        }

        return (
            <section className="comments">
                <div className="comments__user">
                    <img className="johnG" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>

                    <form onSubmit={this.commentSubmit}>
                        <textarea className="input" name="comment-input" type="text" placeholder="Add a public comment" ref={this.commentInput} />

                        <div className="button">
                            <button className="button__cancel">CANCEL</button>
                            <button className="button__post" type="submit">COMMENT</button>
                        </div>
                    </form>
                </div>
                {comments}
            </section>

        )
    }
}

export default Comments;