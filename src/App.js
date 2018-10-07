import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/candidates">Meet the Candidates</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Login} />
      <Route path="/candidates" component={Candidates} />
      {/* <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
    );
  }
}

export default App;
