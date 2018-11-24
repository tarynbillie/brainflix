import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <div className="comments">
                <div className="comments__user">
                    <img className="johnG" src='../assets/Images/john_gibbons.jpg' alt="user icon"></img>
                </div>
                <form>
                <textarea form="comment-form" rows="1" className="input"></textarea>
                </form>
            </div>
        )
    }
}

export default Comments;