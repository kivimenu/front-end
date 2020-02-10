import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export default function Ekmalzeme() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ImportContactsIcon fontSize="small" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>İçindekiler;</MenuItem>
        <MenuItem onClick={handleClose}>Somon Balık</MenuItem>
        <MenuItem onClick={handleClose}>Soya sosu</MenuItem>
        <MenuItem onClick={handleClose}>Dinlendirilmiş ve kurutulmuş yosun</MenuItem>
        <MenuItem onClick={handleClose}><small>KAPAT</small></MenuItem>
      </Menu>
    </div>
  );
}