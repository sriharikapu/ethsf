import React, { Component } from 'react';
import CandidateCard from './CandidateCard'
// import Login from './Login'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cardsPlaceholder = [1,2,3,4,5,6,7,8]

class Candidates extends Component {
  render() {
    return (
      <div className={styles.container}>
        {cardsPlaceholder.map((card, i) => <CandidateCard key={i}/>)}
      </div>
    );
  }
}

export default Candidates;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
