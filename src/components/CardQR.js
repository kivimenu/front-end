import React, { Component } from 'react';
import QR from '../img/qrkod.jpg'

//mui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CardQR extends Component {
  render() {
    return (
      <React.Fragment>
        <Dialog
          open={true}
          fullWidth={true}
          maxWidth='sm'
        >
          <AppBar title="Success" />
          <DialogTitle id="alert-dialog-title">{"QR Kodu ile Ödeme Yap"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Alışveriş yaptığınız mağazada ödeme sırasında QR Kod ile ödeme yapacağınızı belirttikten sonra;
              <br/>
              a. World Mobil uygulamasında Yapı Kredi Pay butonuna tıkladıktan sonra “QR Kod ile Ödeme”yi seçerek QR Kod okuyucuyu açın ve POS cihazında oluşan QR Kod’u okutun. PAY butonuna uzun basarak da QR Kod okuyucuyu açabilirsiniz.
              <br/>
              <img src={QR} width="210" height="210" alt="QR KODU"></img>
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Hayır, Diğer Yolu seçmek istiyorum
          </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CardQR;