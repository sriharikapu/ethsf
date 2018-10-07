import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
      <MenuBar />    
      <Route exact path="/" component={Login} />
      <Route path="/candidates" component={Candidates} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
    );
  }
}

export default App;
