import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'
import SubmitProposal from './SubmitProposal'
import TopContributors from './TopContributors'
import MyContribution from './MyContribution'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
      <MenuBar />
      <Route exact path="/" component={Login} />
      <Route path="/candidates" component={Candidates} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/mycontribution" component={MyContribution} />
      <Route path="/mystory" component={SubmitProposal} />
      <Route path="/top" component={TopContributors} />

    </div>
  </Router>
    );
  }
}

export default App;
