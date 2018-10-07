import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 700,
    margin: 'auto',
    marginTop: '3vh'
  },
  media: {
    height: 430,
  },
};

class MediaCard extends React.Component {

  state = {
    voted: false
  }

  render() {
  const { classes } = this.props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Jess
          </Typography>
          <Typography component="p">
            Dreams are shaped by ideals and families shape the beliefs we grasp so strongly. Someday I want to save and change lives through a medical career. Because my family has taught me that change can be positive and radical in altering lives, I hope to hold that ability someday. I seek the power to improve...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!this.state.voted && <Button size="small" color="primary" onClick={() => {
           this.setState({ voted: true })
           this.props.show()
        }}>
          Vote for Me
        </Button>}
        {this.state.voted && <Button size="small" color="primary" onClick={() => this.setState({ voted: false })}>
          Thanks!
        </Button>}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
