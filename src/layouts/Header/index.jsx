import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import Link from '@material-ui/core/Link';

import HeaderSearchBar from '@/layouts/Header/HeaderSearchBar';

const Header = () => (
  <AppBar position="fixed">

    <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6">
          <Link href="./" color="inherit">US News</Link>
        </Typography>
        <div style={{ flexGrow: 1 }}/>

        <HeaderSearchBar/>

      </Toolbar>
    </Container>
  </AppBar>
);

export default memo(Header);
