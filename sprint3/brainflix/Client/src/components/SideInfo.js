import React, { Component } from 'react';


class SideInfo extends Component {
    render() {
        return (

            <div className="side">
                <div>
                    <img className="side__image" src={this.props.image} alt={'a video of ' + this.props.title}></img>
                </div>

                <div>
                    <h3 className="side__content">
                        {this.props.title}
                    </h3>

                    <h4 className="side__title">
                        {this.props.channel}
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