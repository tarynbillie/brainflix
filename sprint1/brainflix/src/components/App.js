import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../styles/App.css';
import SideVideos from './SideVideos';
import vids from './VideoData';



class App extends Component {
  state = {
    // comments: [],
    vids: vids
  }

// componentDidMount() {
//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     this.setState({
//       comments: data,

//     })
//   })
// }

  render() {

    return (
      <div>
        <Header />
        <div className="compo-container">
          <Main />
          <SideVideos vidArray={this.state.vids} />
        </div>
      </div>
    );
  }
}





export default App;
