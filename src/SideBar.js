import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100vh'
  },
  appBar: {
    zIndex: theme.zIndex.drawer - 2,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  const handleClose = event => {
    let to = event.target.id
    props.history.push(`/${to}`)
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
          <MenuItem onClick={handleClose} id='dashboard'>State of the dApp</MenuItem>
          <MenuItem onClick={handleClose} id='mycontribution'>My Contribution</MenuItem>
          <MenuItem onClick={handleClose} id='top'>Top Contributors</MenuItem>
        <Divider />
      </Drawer>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ClippedDrawer));
