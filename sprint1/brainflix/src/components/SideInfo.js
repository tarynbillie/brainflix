import React, { Component } from 'react';

/*
    1. video -- <img>
    2. title -- <h3>
    3. author -- <h4>
    4. views -- <p>
 */

class SideInfo extends Component {
    render() {
        return (

            <div className="side">
                <div>
                    <img className="side__image" src={this.props.video} alt={'a video of ' + this.props.title}></img>
                </div>

                <div>
                    <h3 className="side__content">
                        {this.props.title}
                    </h3>

                    <h4 className="side__title">
                        {this.props.author}
                    </h4>

                    <p className="side__views">
                        {this.props.views}
                    </p>
                </div>
            </div>
        )
    }
}


export default SideInfo;