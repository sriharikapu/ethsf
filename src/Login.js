import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'
import abi from './AccountRegistry.js'
import SnackBar from './Snackbar'
import Dashboard from './Dashboard'

const Web3 = require('web3')

// const signature = web3.eth.accounts.sign(web3.utils.utf8ToHex("Hello, Bloom!"), address);
// AccountRegistry.methods.createNewAccount(address).send({
//   from: address
// },
//   function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })
//
// if (typeof web3 !== 'undefined') {
// //   web3 = new Web3(currentProvider);
// // } else {
//   web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
// }

//test connection to rinkeby test net and query for balance of random known account, OK
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));

//BLOOM ID - create account registry object from contract on Rinkeby, logs OK
console.log('BLOOM CONTRACT');
let AccountRegistry = new web3.eth.Contract(abi, '0xfbc650e80d6796dff3101457eac4af994e4d2062')
console.log(AccountRegistry);

//Calling method to check if wallet address is registered in BLOOM ID smart contract returning true or false, OK


//Find Bloom ID by registered wallet address
AccountRegistry.methods.accountIdForAddress("0x82f92383afb67c42a7635690f2eb4db408be2656").call(function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})

const BloomVerifiedAccount = '0x82f92383afb67c42a7635690f2eb4db408be2656'
const BloomUnregisteredAccount = '0xa4262058bc8a85274eaed34a2033f1d193f9f16a'



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
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: '5vh'
  }
});

class Login extends Component {

  state = {
    email: '',
    password: '',
    success: false,
    error: false
  }

  componentDidMount() {

  // Check if Web3 has been injected by the browser (MetaMask).
  // (since 'web3' is global, we need to use 'window')
  if (window.web3 && window.web3.currentProvider.isMetaMask) {
    window.web3.eth.getAccounts((error, accounts) => {

      // Do whatever you need to.
      this.setState({wallet: accounts[0]});
    });
  } else {
    console.log('MetaMask account not detected :(');
  }
}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit = () => {
    const address = this.state.wallet
    console.log('SUBMIT', address);
    AccountRegistry.methods.addressBelongsToAccount(BloomVerifiedAccount).call().then((res, err) => {
      if (err) {
        console.log(err);
        this.setState({ error: true, message: "Error validating Bloom account" })
      } else if (res === false ){
        this.setState({ error: true, message: "Error validating Bloom account" })
      } else if (res === true) {
        this.setState({ success: true, message: "Bloom ID verified!" })
      }
    })
  }




  render() {
    const { classes } = this.props;
    const { success, error, message } = this.state

    return (
      <div className='App'>
        <form className={classes.container} noValidate autoComplete='off'>
          <SnackBar success={success} error={error} message={message}/>
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin="normal"
          />
        <Button variant="contained" color="secondary" className={classes.button}      onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
