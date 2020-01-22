import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  sayi:{
    top: 15,
    right: 20
  }
}));

export default function DecInc() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
      <div>
        {/* <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge> */}
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Badge className={classes.sayi} color="secondary" badgeContent={count}/>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
  );
}
