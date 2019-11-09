import React, { useMemo } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';


import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/core/SvgIcon/SvgIcon';
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: 120,
      '&:focus': {
        width: 180,
      },
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  infiniteScroll: {
    minHeight: 600,
    height: '100vh',
    marginTop: 20,
  },
}));

function BasicLayout(props) {

  const {children, dispatch} = props;

  const classes = useStyles();

  const renderedSearchBar = useMemo(() => (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onKeyUp={(e) => {
          dispatch({
            type: 'news/setKeyword',
            payload: { keyword: e.target.value },
          });
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  ), [classes.inputInput, classes.inputRoot, classes.search, classes.searchIcon, dispatch]);

  const renderedHeader = useMemo(() => (
    <AppBar position="fixed">

      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">
            US News
          </Typography>
          <div style={{ flexGrow: 1 }}/>

          {renderedSearchBar}

        </Toolbar>
      </Container>
    </AppBar>
  ), [renderedSearchBar]);


  return (<>
      <CssBaseline/>

      {renderedHeader}

      <div className={classes.offset}/>

      <main
        className={classes.infiniteScroll}>

        <Container maxWidth="lg">

          {children}

        </Container>

      </main>


    </>
  );
}

export default withRouter(connect()(BasicLayout));
