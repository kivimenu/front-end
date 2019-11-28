import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Bilgileriniz
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Adınızı Girin"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Soyadınızı Girin"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Adresiniz"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Adresiniz"
            fullWidth
            autoComplete="billing email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Telefon Numaranız"
            fullWidth
            autoComplete="billing phone"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Ödeme için bu bilgileri kullanın."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}