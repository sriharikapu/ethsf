import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'
import SubmitProposal from './SubmitProposal'
import TopContributors from './TopContributors'
import MyContribution from './MyContribution'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {

  render() {
    return (
      <Router>
        {/* <Route render={({ location }) => (
          <div>
            <Route exact path="/" render={() => (
              <Redirect to="/"/>
            )}/>
        <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={700}
          > */}
            <div>
        <MenuBar />
        {/* <Switch location={location}> */}
        <Route exact path="/" component={Login} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mycontribution" component={MyContribution} />
        <Route path="/mystory" component={SubmitProposal} />
        <Route path="/top" component={TopContributors} />
/
      </div>

  </Router>
    );
  }
}

export default App;
