import React from 'react';
import TekrarHatirlat from '../components/TekrarHatirlat';

//mui
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PaymentIcon from '@material-ui/icons/Payment';
import Slide from '@material-ui/core/Slide';


//router
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    sepetEkle: {
        position: 'fixed',
        right: 11,
        bottom: 13
    },
    Veya: {
        textAlign: 'center',
        margin: 10
    },
    OdemeButton: {
        marginLeft: '30%',
        marginRight: '30%'
    },
    gelenItems: {
        flex: 'initial'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SepeteEkle() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab aria-label="add" className={classes.sepetEkle}>
                <ShoppingCartIcon color="secondary" fontSize="large" onClick={handleClickOpen} />
            </Fab>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Sipariş Istekleri
                       </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Kapat
                       </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem  button>
                        <ListItemText primary="Sushi" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="12 TL" secondary="{ 12 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Steak" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="50 TL" secondary="{ 1 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <ListItem  button>
                        <ListItemText primary="Burger" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="30 TL" secondary="{ 2 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Coke" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="7 TL" secondary="{ 2 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <ListItem  button>
                        <ListItemText primary="Sushi" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="12 TL" secondary="{ 12 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Steak" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="50 TL" secondary="{ 1 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <ListItem  button>
                        <ListItemText primary="Burger" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="30 TL" secondary="{ 2 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Coke" secondary="[Yemek hakkında ufak bir bilgi]" />
                        <ListItemText primary="7 TL" secondary="{ 2 } ADET"  className={classes.gelenItems} />
                    </ListItem>
                </List>
                <Fab color="primary" variant="extended" className={classes.OdemeButton}>
                    <Link to="odeme" style={{ textDecoration: 'none' }}>
                        <PaymentIcon />
                        Hemen Öde
                </Link>
                </Fab>
                <Typography variant="h6" className={classes.Veya}>
                    Veya
                </Typography>
                {/* <Fab variant="extended" onClick={handleClose} className={classes.OdemeButton}>
                    <AddAlertIcon />
                    Tekrar Hatırlat
                </Fab> */}
                <div className={classes.Veya}>
                <TekrarHatirlat />
                </div>
    
            </Dialog>
        </div>
    );
}
