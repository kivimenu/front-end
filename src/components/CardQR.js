import React, { Component } from 'react';
import QRs from './QRs';

//mui
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CardQR extends Component {
  state = {
    open: false
  };
  handleClose = () => {
    this.setState({ open: true })
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={true}
          fullWidth={true}
          maxWidth='sm'
        >
          <DialogTitle>QR Kodu ile Ödeme Yap</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Alışveriş yaptığınız mağazada ödeme sırasında QR Kod ile ödeme yapacağınızı belirttikten sonra
              
              a. World Mobil uygulamasında Yapı Kredi Pay butonuna tıkladıktan sonra QR Kod ile Ödeme yi seçerek QR Kod okuyucuyu açın ve POS cihazında oluşan QR Kod’u okutun. PAY butonuna uzun basarak da QR Kod okuyucuyu açabilirsiniz.
              <QRs />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Hayır, Normal yoldan ödemek istiyorum.
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CardQR;