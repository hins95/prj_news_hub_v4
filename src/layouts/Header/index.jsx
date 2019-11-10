import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import Link from '@material-ui/core/Link';

import HeaderSearchBar from '@/layouts/Header/HeaderSearchBar';

const useStyles = makeStyles(theme => ({
  header: {
    background: '#3c3b63',
    text: '#ffffff',
    shadow: 'rgba(0,0,0,0.2)',
  },
}));

const Header = () => {
  const classes = useStyles();

  return <AppBar position="fixed" className={classes.header}>

    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6">
          <Link href="./" color="inherit">US News</Link>
        </Typography>
        <div style={{ flexGrow: 1 }}/>

        <HeaderSearchBar/>

      </Toolbar>
    </Container>
  </AppBar>;
};

export default memo(Header);
