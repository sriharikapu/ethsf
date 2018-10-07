import React, { Component } from 'react';
import Login from './Login'
import Candidates from './Candidates'
import MenuBar from './MenuBar'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cardsPlaceholder = ['https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=350',
'http://free-hairstyles.com/wp-content/uploads/2018/02/girl-with-short-hair-black-and-white-free-stock-photos-of-short-hair-c2b7-pexels.jpeg',
'https://www.lockportny.gov/wp-content/uploads/2018/01/pexels-photo-428341.jpg',
'https://rudranibanikmd.com/wp-content/uploads/2017/02/pexels-photo-819105.jpeg',
'http://drentchedphotography.com/wp-content/uploads/2017/08/pexels-photo-206445.jpeg',
'https://cdn.pixabay.com/photo/2016/11/29/12/33/beautiful-1869530_1280.jpg',
'https://www.studentbrands.co.za/wp-content/uploads/2017/07/pexels-photo-101584.jpeg',
'https://www.tao-u.com/wp-content/uploads/2018/01/pexels-photo-718978-683x1024-1024x585.jpeg',
'http://beautyandblush.com/wp-content/uploads/2016/08/pexels-photo-88636.jpeg',
'https://www.rimma.co/wp-content/uploads/2018/07/pexels-photo-1244063.jpeg']

const GraphBar = props => {
  let { width, avatar } = props
  return (
    <div style={styles.container}>
      <div style={styles.barContainer}>
        <img style={styles.avatar} src={cardsPlaceholder[props.i]}/>
        <div style={{...styles.bar, width}}></div>
        <div style={styles.amt}>{props.amt + 'ETH'}</div>
      </div>
    </div>
  )
}

export default GraphBar

const styles = {
  container: {
    margin: 'auto',
    alignItems: 'center',
    width: '90%',
  },
  barContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: '1.4vh',
  },
  bar: {
    height: '6vh',
    boxShadow: '0 6px 12px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23)',
    backgroundImage: 'linear-gradient(to right, #C51162, #3F51B5)',
    borderRadius: '0 .5em .5em 0',
  },
  avatar: {
    width: '46px',
    height: '46px',
    borderRadius: '23px',
    marginRight: '1vw',
    objectFit: 'cover'
  },
  amt: {
    marginLeft: '1vw',
    color: 'rgb(80,80,80,.8)'
  }

}
