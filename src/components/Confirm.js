import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

const styles = {
  paperScrollPaper: {
    padding: '11%',
  },
  formButton: {
    margin: '1%',
  },
};

class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, phone }
    } = this.props;
    return (
        <React.Fragment>
          <Dialog
            open={true}
            maxWidth='md'
            fullWidth={true}
          >
            <Paper className={classes.paperScrollPaper}>
            <List>
              <ListItem>
                <ListItemText primary="Adınız" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Soyadınız" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Telefon Numaranız" secondary={phone} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="outlined"
              onClick={this.back}
              size="large"
              className={classes.formButton}
            >Geri</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              size="large"
              className={classes.formButton}
            >Onayla ve Devam et</Button>
            </Paper>
          </Dialog>
        </React.Fragment>
    );
  }
}


Confirm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirm);