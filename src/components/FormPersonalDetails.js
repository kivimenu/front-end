import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Meslek"
              label="Meslek"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Şehir"
              label="Şehir"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
							fullWidth={true}
            />
            <br />
            <TextField
              placeholder="Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
							fullWidth={true}
            />
            <br />
        
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Geri</Button>

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

export default FormPersonalDetails;