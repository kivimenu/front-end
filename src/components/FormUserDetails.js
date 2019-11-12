import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog 
            open={true}
            fullWidth={true}
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
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
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Devam</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;