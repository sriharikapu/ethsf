import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GraphBar = props => {
  let { width, avatar } = props
  return (
    <div>
      <div style={styles.barContainer}>
      <img style={styles.avatar} src={'http://placekitten.com/128/128'}/>
      <div style={{...styles.bar, width}}></div>
      <div style={styles.amt}>{props.amt + 'ETH'}</div>
    </div>
    </div>
  )
}

export default GraphBar

const styles = {
  barContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: '1.4vh',
  },
  bar: {
    height: '6vh',
    boxShadow: '0 6px 12px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)',
    backgroundImage: 'linear-gradient(to right, #3F51B5 , #C51162)',
    borderRadius: '0 .3em .3em 0',
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    marginRight: '1vw'
  },
  amt: {
    marginLeft: '1vw'
  }

}
