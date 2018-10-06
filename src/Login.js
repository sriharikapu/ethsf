import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'
import abi from './AccountRegistry.js'
// let ABI = JSON.stringify(abi)

const Web3 = require('web3')
const currentProvider = '0xa4262058bc8a85274eaed34a2033f1d193f9f16a'

// if (typeof web3 !== 'undefined') {
// //   web3 = new Web3(currentProvider);
// // } else {
//   web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
// }

//test connection to rinkeby test net and query for balance of random known account, OK
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
var account1= "0x9795a539f682923Bb7055e8a7b43fA7b6005C763"; web3.eth.getBalance(account1).then(res => console.log(res))

//BLOOM ID - create account registry object from contract on Rinkeby, logs OK
console.log('BLOOM CONTRACT');
let AccountRegistry = new web3.eth.Contract(abi, '0xfbc650e80d6796dff3101457eac4af994e4d2062')
console.log(AccountRegistry);

//Calling method to check if wallet address is registered in BLOOM ID smart contract returning true or false, OK
AccountRegistry.methods.addressBelongsToAccount("0x82f92383afb67c42a7635690f2eb4db408be2656").call(function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: '2vh'
  }
});

class Login extends Component {

  state = {
    name: '',
    email: ''
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { classes } = this.props;

    return (
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={this.state.email}
        onChange={this.handleChange('email')}
        margin="normal"
      />
      <Button variant="contained" color="secondary" className={classes.button}>
        Submit
      </Button>
        </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
