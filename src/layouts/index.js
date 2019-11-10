import React from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

import { Container, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '@/layouts/Header';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  main: {
    minHeight: 600,
    height: '100vh',
    marginTop: 20,
  },
}));

function BasicLayout(props) {

  const { children } = props;

  const classes = useStyles();

  return (<>
      <CssBaseline/>

      <Header/>

      <div className={classes.offset}/>

      <main className={classes.main}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>

    </>
  );
}

export default withRouter(connect()(BasicLayout));
