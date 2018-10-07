import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Bar from './GraphBar'
import SideBar from './SideBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const bars = [1.24,3.22,4.44,5,6.53,7.50,8.9,9.1,9.4,12.5]

class App extends Component {

  render() {

    let barsSortedByLargest = bars.sort((a,b) => b > a)
    return (
      <div style={styles.rowContainer}>
      <SideBar />
      <div style={styles.container}>
        <div style={styles.title}>Most Generous Contributors</div>
        <div style={styles.barContainer}>
          {barsSortedByLargest.map((ethAmt,i) => {
            let width = (ethAmt / barsSortedByLargest[0]) * 100
          return <Bar width={`${width}%`} key={i} amt={ethAmt}/>
        })}
      </div>
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
    marginTop: '2em',
    marginRight: '1em',
    margin: 'auto',
    padding: '1em'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    margin: 'auto',
  },
  barContainer: {
    width: '80vw',
    margin: 'auto',
  },
  title: {
    fontSize: '2em',
    color: '#232323',
    textAlign: 'center',
    marginBottom: '1em',
  },
  dividerSmall: {
    width: '20vw',
    border: '1px solid #232323',
    marginTop: '1em',
    marginBottom: '1em'
  },
  ethLogo: {
    width: '100px',
    height: '100px'
  }
}
