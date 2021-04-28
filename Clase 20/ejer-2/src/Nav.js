import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
            <MenuIcon />
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
      }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem containerElement={<Link to="/" />} onClick={handleClose} >Home</MenuItem>
        <MenuItem containerElement={<Link to="/productos" />} onClick={handleClose}>Productos</MenuItem>
        <MenuItem containerElement={<Link to="/contactos" />} onClick={handleClose}>Contacto</MenuItem>
        <Link to="/" exact style={{ margin: 10 }} onClick={handleClose}>
        <Typography className={classes.root}>
                        Home
                    </Typography>
                
                </Link>
      </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography >
          
          <Link to="/" exact style={{ margin: 10 }}>
                
                <Typography className={classes.root}>
                    Home
                </Typography>
            
        </Link>
        <Link to="/productos" style={{ margin: 10 }}>
            <Typography className={classes.root}>
                Productos
            </Typography>
        </Link>
        <Link to="/contactos" style={{ margin: 10 }}>
            <Typography className={classes.root}>
                Contactos
            </Typography>
        </Link>
          <Button color="inherit" >Home <Link to="/home" exact style={{ margin: 10 }} onClick={handleClose} ></Link></Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
