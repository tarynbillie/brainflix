import React, { Component } from 'react';
import SideInfo from './SideInfo';
import { Link } from 'react-router-dom';


class SideVideos extends Component {


    render() {

        return (
            <section className="side-grid">
                <p>Up next</p>
                {
                    this.props.vids.map((vidInfo) => {
                        return <Link to={`/main/${vidInfo.id}`} ><SideInfo image={vidInfo.image}
                            title={vidInfo.title}
                            channel={vidInfo.channel}
                            views={`${vidInfo.views} views`} /> </Link>
                    })
                }
            </section>
        )
    }
}


export default SideVideos;