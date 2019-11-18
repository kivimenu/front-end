import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

//mui islevleri
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

//data
import posts from '../data/menu.js';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  },
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: 1,
  },
};

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    };
  }
  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={1} direction="row" justify="space-around" alignItems="center">
          <Grid item xs={12}>
            <Card className={classes.card}>
              {
                posts.map(post => (
                  <div key={post.id} align="start">
                    <CardActionArea>
                      <CardMedia className={classes.media} title="Contemplative Reptile" image={require('../img/paella.jpg')}>
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon />
                      </Fab>
                      <Fab color="secondary" aria-label="edit" className={classes.fab}>
                        <EditIcon />
                      </Fab>
                    </CardActions>
                    <br />
                  </div>
                ))
              }
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(menu);
