import React, { Component } from 'react';
import CandidateCard from './CandidateCard'
import SweetAlert from 'react-bootstrap-sweetalert';
// import Login from './Login'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

class Candidates extends Component {
  state = {
    show: false
  }

  hideAlert = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.show && <SweetAlert success title="Vote Confirmed!" onConfirm={this.hideAlert} confirmBtnStyle={styles.button}>
        </SweetAlert>}
        {cardsPlaceholder.map((card, i) => <CandidateCard key={i} image={card} show={() => {
          this.setState({show: true})
          setTimeout(this.hideAlert, 1000)
        } }/>)}
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
  },
  button: {
    marginTop: '5vh',
    paddingRight: '1.4em',
    paddingLeft: '1.4em',
    fontSize: '1.2em',
    backgroundImage: 'linear-gradient(to right, #5945A4, #9E257B)',
    borderRadius: '.2em',
    color: '#FFF',
    fontWeight: 'bold',
    paddingTop: '.6em',
    paddingBottom: '.6em'
  }
}
