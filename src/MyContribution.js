import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Bar from './GraphBar'
import SideBar from './SideBar'
import LineChart from './LineChart'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {

    return (
        <div style={styles.rowContainer}>
          <SideBar />
          <div style={styles.container}>
            <div style={styles.title}>Your Contribution</div>
            <div style={styles.dividerSmall}></div>
            <div style={styles.title}>{19.43 + 'ETH'}</div>
            <img style={styles.ethLogo} src='https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'/>
            <LineChart />
          </div>
        </div>
    );
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2em',
    margin: 'auto',
    width: '100vw',
    height: '90vh'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
  },
  barContainer: {
    width: '80vw',
    margin: 'auto',
  },
  title: {
    fontSize: '2em',
    color: '#232323',
    textAlign: 'center'
  },
  dividerSmall: {
    width: '20vw',
    border: '1px solid rgb(80,80,80,.8)',
    marginTop: '1em',
    marginBottom: '1em'
  },
  ethLogo: {
    width: '140px',
    height: '140px',
    marginBottom: '1em'
  }
}
