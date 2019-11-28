import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
    return (
      <MuiThemeProvider > 
        <React.Fragment>
        <Dialog 
            open={true}
            fullWidth={true}
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Zaman ayırdığınız için teşekkürler</h1>
            <p>Restoranımıza tekrar geldiğinizde bilgileriniz kayıt olmuş olacak</p>
            <h3>Menu'ye geçip dilediğinizi seçin. geçmek için <Link to="/menuler">burayı tıklayın</Link></h3>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;