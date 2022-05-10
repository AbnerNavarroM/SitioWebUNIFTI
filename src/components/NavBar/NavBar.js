import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppMenu from './../Menu/Menu';
import UniLogo from '../../sources/logos/UniLogo';
import { List } from './../../sources/NavBarItemList';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Hidden from '@material-ui/core/Hidden';
import TemporaryDrawer from '../NavigationDrawer/NavigationDrawer';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
        borderBottom: '3px solid #09226F',
        transition: '0.05s '
      },
    },
  },
}));



export default function NavBar() {
  const classes = useStyles();

  //Para redimensionar el logo de la facultad
  let viewBox = "";
  let height = 0;

  let mql = window.matchMedia('(max-width: 360px)');

  // For first render
  let mobileView = mql.matches;
  if (mobileView) {
    viewBox = "0 -10 400.122 111.116";
    height = "25"
  } else {
    mql = window.matchMedia('(min-width: 361px) and (max-width: 799px)');
    mobileView = mql.matches;
    if (mobileView) {
      viewBox = "0 -10 400 111.116";
      height = '40';
    } else {
      mql = window.matchMedia('(min-width : 800px) and (max-width: 960px)');
      // For first render
      let mobileView = mql.matches;
      if (mobileView) {
        viewBox = "0 0 400 120.116";
        height = "60"
      }
    }
  }
  return (
    <AppBar position="fixed" color="inherit"
    >
      <Toolbar
        className="ToolBar"
      >
        <a href="/">
          <UniLogo
            viewBox={viewBox}
            height={height}
          />
        </a>
        {/* <Button color="inherit">Login</Button> */}
        {
          List.map((item, index) => {
            return (
              <Hidden key={index} smDown>
                <AppMenu id={"menu" + (index + 1)} nLinks={item.nestedLinks}>
                  {item.title}
                </AppMenu>
              </Hidden>
            )
          })
        }
        <div
          className={classes.search + ' search'}
        >
          <div
            className={classes.searchIcon + ' searchIcon'}
          >
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            className="input2"
          />
        </div>
        <TemporaryDrawer />
      </Toolbar>
    </AppBar>
  );
}