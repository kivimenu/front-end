import React from 'react';
import PropTypes from 'prop-types';
import QR from '../img/qrkod.jpg'

//MUİ
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

//bankalar
import Garanti from '../img/garanti.jpg'
import Kuveyt from '../img/kuveyt.png'
import YapiKredi from '../img/yapikredi.png'

const useStyles = makeStyles({
    avatar: {
        width: 60,
        height: 60
    },
    simpleQRs: {
        width: 180,
        height: 180
    }
});

function QRs(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Bankalar</DialogTitle>
            <List>
                <ListItem
                    autoFocus
                    button
                    onClick={() => handleListItemClick(
                        <img className={classes.simpleQRs} src={QR} alt="qrs" />
                    )}
                >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <img src={Garanti} alt="Garanti Bank" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <ListItemText primary="Garanti Bankası" />
                    </ListItemAvatar>
                </ListItem>

                <ListItem
                    autoFocus
                    button
                    onClick={() => handleListItemClick(
                        <img className={classes.simpleQRs} src={QR} alt="qrs" />
                    )}
                >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <img src={Kuveyt} alt="Kuveyt Bank" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <ListItemText primary="Kuveyt Turk Bankası" />
                    </ListItemAvatar>
                </ListItem>
                <ListItem
                    autoFocus
                    button
                    onClick={() => handleListItemClick(
                        <img className={classes.simpleQRs} src={QR} alt="qrs" />
                    )}
                >
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <img src={YapiKredi} alt="YapiKredi Bank" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <ListItemText primary="Yapı Kredi Bankası" />
                    </ListItemAvatar>
                </ListItem>
            </List>
        </Dialog>
    );
}

QRs.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default function QRS() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(['banka seçilmedi!']);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1">Seçilen Banka: {selectedValue}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Bankanı seç
      </Button>
            <QRs selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}