import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SepeteEkle from '../components/SepeteEkle';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

//data
import posts from '../data/menu.js';

const styles = {
  card: {
    maxWidth: 355,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  },
  root: {
    justifyContent: 'space-evenly',
    gridGap: 10,
    paddingLeft: 8
  },
  fab: {
    margin: 10,
    width: 42,
    height: 42
  },
  PriceOfYemek: {
    padding: 5,
    width: 100,
    position: 'absolute',
    bottom: '30%',
    left: '65%',
  },
  DecInc: {
    position: 'sticky',
    left: '65%',
  }
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
        <Grid container spacing={1} item xs={12} direction="row" justify="space-around" alignItems="center">
            <Card className={classes.card}>
              {
                posts.map(post => (
                  <div key={post.id} align="start">
                    <CardActionArea>
                      <CardMedia className={classes.media} title="Contemplative Reptile" image="http://lorempixel.com/345/194/">
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography className={classes.PriceOfYemek} variant="h5" component="h3">
                          {post.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddShoppingCartIcon fontSize="small" />
                      </Fab>
                      <Fab  aria-label="edit" className={classes.fab}>
                        <ImportContactsIcon fontSize="small" />
                      </Fab>
                      <div className={classes.DecInc}>
                        <Fab color="primary" aria-label="add" className={classes.fab}>
                          <PlusOneIcon fontSize="small" />
                        </Fab>
                        <small>22</small>
                        <Fab color="secondary" aria-label="edit" className={classes.fab}>
                          <ExposureNeg1Icon fontSize="small" />
                        </Fab>
                      </div>
                    </CardActions>
                    <hr />
                    <br />
                  </div>
                ))
              }
            </Card>
            <SepeteEkle />
            <Card className={classes.card}>
              {
                posts.map(post => (
                  <div key={post.id} align="start">
                    <CardActionArea>
                      <CardMedia className={classes.media} title="Contemplative Reptile" image="https://dummyimage.com/345x194/af3ffa/000000.png?text=Minus+App">
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography className={classes.PriceOfYemek} variant="h5" component="h3">
                          {post.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddShoppingCartIcon fontSize="small" />
                      </Fab>
                      <Fab  aria-label="edit" className={classes.fab}>
                        <ImportContactsIcon fontSize="small" />
                      </Fab>
                      <div className={classes.DecInc}>
                        <Fab color="primary" aria-label="add" className={classes.fab}>
                          <PlusOneIcon fontSize="small" />
                        </Fab>
                        <small>22</small>
                        <Fab color="secondary" aria-label="edit" className={classes.fab}>
                          <ExposureNeg1Icon fontSize="small" />
                        </Fab>
                      </div>
                    </CardActions>
                    <hr />
                    <br />
                  </div>
                ))
              }
            </Card>
            <SepeteEkle />
          </Grid>
      </div>
    );
  }
}

menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(menu);
