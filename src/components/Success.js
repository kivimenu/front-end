import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
  paperScrollPaper: {
    padding: '11%',
  },
  formButton: {
    margin: '1%',
  },
};


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Dialog
            open={true}
            maxWidth='md'
            fullWidth={true}
          >
            <Paper className={classes.paperScrollPaper}>
              <Typography variant="h4" gutterBottom align="center">
                Zaman ayırdığınız için teşekkürler
              </Typography>
              <hr />
              <Typography variant="subtitle1" gutterBottom>
                Restoranımıza tekrar geldiğinizde bilgileriniz Kayıt olmasını ister misiniz?
              </Typography>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Onaylıyorum"
                labelPlacement="end"
              />
              <hr />
              <Typography variant="button" display="block" gutterBottom>
                Menu'ye geçip dilediğinizi seçin. geçmek için
                <Link to="/menuler" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="secondary">
                    Buraya Tıklayın
                  </Button>
                </Link>
              </Typography>
            </Paper>
          </Dialog>
        </div>
      </React.Fragment>
    );
  }
}

Success.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Success);