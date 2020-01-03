import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ApiHandler from '../data/apiHandler';

const styles = {
  paperScrollPaper: {
    padding: '11%',
  },
};

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  async kullaniciBilgi() {
    await ApiHandler.kullaniciBilgi();
  }
  render() {
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Dialog
          open={true}
          maxWidth='md'
          fullWidth={true}
        >
          <Paper className={classes.paperScrollPaper}>
            <TextField
              placeholder="Adınızı girin"
              label="Adınız"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Soyadınızı Girin"
              label="Soyad"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Email adresinizi girin"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Telefon Numaranızı girin(istege baglı)"
              label="Telefon numaranız"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              fullWidth={true}
            />
          </Paper>
          <Button
            color="primary"
            variant="outlined"
            onClick={this.continue}
            size="large"
          >Devam</Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={this.kullaniciBilgi}
            size="large"
          >Kullanıcı Bilgi Test</Button>
        </Dialog>
      </React.Fragment>
    );
  }
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormUserDetails);
