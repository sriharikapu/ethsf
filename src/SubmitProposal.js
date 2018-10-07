import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'
import SnackBar from './Snackbar'
import Dashboard from './Dashboard'

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
    marginTop: '5vh',
    paddingRight: '1.4em',
    paddingLeft: '1.4em',
    fontSize: '1.2em',
    backgroundImage: 'linear-gradient(to right, #5945A4, #9E257B)',
  }
});

class SubmitProposal extends Component {

  state = {
    name: '',
    email: '',
    success: false,
    error: false
  }

  componentDidMount() {
}


  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit = () => {
    this.setState({ success: true, message: 'Your story is out, good luck!'})
  }

  render() {
    const { classes } = this.props;
    const { success, error, message } = this.state

    return (
      <div className='App'>
        <form className={classes.container} noValidate autoComplete='off'>
          <SnackBar success={success} error={error} message={message}/>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="city"
            label="City"
            className={classes.textField}
            value={this.state.city}
            onChange={this.handleChange('city')}
            margin="normal"
          />
          <TextField
            id="school"
            label="School"
            className={classes.textField}
            value={this.state.school}
            onChange={this.handleChange('school')}
            margin="normal"
          />
          <TextField
            id="degree"
            label="What degree are you working towards?"
            className={classes.textField}
            value={this.state.degree}
            onChange={this.handleChange('degree')}
            margin="normal"
          />
          <TextField
            id="you"
            label="What's your story?"
            multiline={true}
            className={classes.textField}
            value={this.state.you}
            onChange={this.handleChange('you')}
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

SubmitProposal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitProposal);
