import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import LoginLogo from '../img/icon.png'

//mui islevleri
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
    ...theme.spreadThis
});

class login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img src={LoginLogo} className={classes.image} alt="cryptosozluk logo" />
                    <Typography variant="h2" className={classes.pageTitle}>
                        1
                    </Typography>
                    <form noValidate>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.TextField}
                            fullWidth />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Şifre"
                            fullWidth />
                        
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Giriş yap
                        </Button>
                        <br />
                        <br />
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        );
    };
};

login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);