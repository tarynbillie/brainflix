import React, { Component } from 'react';
import SideInfo from './SideInfo';
import vids from './VideoData';



class SideVideos extends Component {
    // fetch GET /videosList in this component

    render() {
        let vids = this.props.vidArray;

        return (
            <section className="side-grid">
                <p>Up next</p>
                {
                    vids.map((vidInfo) => {
                        return <SideInfo video={vidInfo.video}
                            title={vidInfo.title}
                            author={vidInfo.author}
                            views={vidInfo.views} />
                    })
                }
            </section>
        )
    }

}


export default SideVideos;