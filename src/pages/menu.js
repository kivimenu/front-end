import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

//mui islevleri
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//data
import posts from '../data/menu.js';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
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
        <Grid container spacing={1} direction="row" justify="space-around" alignItems="center">
          <Grid item xs={12}>
          <Card className={classes.card}>
            {
              posts.map(post => (
                <div key={post.id} align="start">
                  <CardActionArea>
                    <CardMedia className={classes.media} title="Contemplative Reptile">
                      {post.image}
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
                    <Button size="small" color="primary">
                      Sepete ekle
                  </Button>
                    <Button size="small" color="primary">
                      Yemek hakkında
                   </Button>
                  </CardActions>
                  <br/>
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
