import React, { Component } from 'react';
import Main from './Main';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Upload from './Upload';
import UploadStatus from './UploadStatus';
import CommentsInfo from './CommentsInfo';


class App extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route path={'/uploadstatus'} exact component={UploadStatus} />
            <Route path={'/upload'} exact component={Upload} />
            <Route path={'/main'} exact component={Main} />
            <Route path={'/main/:id'} exact render={(props) => { return <Main {...props} /> }} />
            <Route path={'/main/:id/comments'} exact render={(props) => {return <CommentsInfo {...props} formSubmit={this.formSubmit}/>}}/>
            <Route path={'/'} render={() => <Redirect to='/main' />} />
          </Switch>
        </Router>
      </div>
    );
  }
}





export default App;
