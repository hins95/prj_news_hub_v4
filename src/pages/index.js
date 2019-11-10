import React from 'react';
import { connect } from 'dva';
import { Avatar, Card, CircularProgress, Grid, Typography } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroller';
import Link from '@material-ui/core/Link';

const TRANSPARENT_IMG_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    // Provide some spacing between cards
    // margin: 10,
    // padding: theme.spacing(2),

    // Use flex layout with column direction for components in the card
    // (CardContent and CardActions)
    // display: "flex",
    // flexDirection: "column",

    // Justify the content so that CardContent will always be at the top of the card,
    // and CardActions will be at the bottom
    // justifyContent: "space-between"
  },
  loadingBlock: {
    marginTop: 90,
    marginBottom: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    flexGrow: 1,
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


function IndexPage({
                     totalResults,
                     articles,
                     dispatch,
                     isLoading,
                   }) {

  // console.log('articlesarticles');
  // console.log(articles);
  // const {articles = []} = data || {};

  const classes = useStyles();

  return (
    <>
      {isLoading ? <div className={classes.loadingBlock}><CircularProgress size={60} thickness={4}/></div> : null}

      <InfiniteScroll
        pageStart={1}
        loadMore={(page) =>
          dispatch({
            type: 'news/fetchMore',
            payload: { isAppend: true, page },
          })
        }
        hasMore={articles.length < 100 && articles.length !== 0}
        loader={
          <div className={classes.loadingBlock} key="loader"><CircularProgress size={60} thickness={4}/></div>
        }
      >

        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}
                direction='row'
            // alignItems="stretch"
                alignItems="stretch"
          >
            {articles.map((article) => (

              <Grid item md={4} sm={6} xs={12} key={article.url}>

                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {article.source.name.charAt(0)}
                      </Avatar>
                    }
                    title={article.source.name}
                    subheader={moment(article.publishedAt).format('YYYY-MM-DD HH:mm')}
                  />
                  <CardMedia
                    className={classes.media}
                    image={article.urlToImage || TRANSPARENT_IMG_SRC}
                    title={article.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom>
                      <Link href={article.url} color="inherit" target="_blank"  rel="noopener noreferrer">
                        {article.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {article.description}
                    </Typography>
                  </CardContent>
                </Card>
                {/*<Paper className={classes.paper}>item</Paper>*/}
              </Grid>
            ))}

          </Grid>
        </Grid>
      </InfiniteScroll>
    </>
  );
}

IndexPage.propTypes = {};

export default connect(({ news, loading }) => {
  const {
    totalResults,
    articles,
  } = news;

  // const { visible: isScoreModalVisible } = scoreModals;
  return {

    // isLoading:
    //   loading.effects['example/fetch'] ||
    //   loading.effects['example/fetch'] ||
    //   loading.effects['example/fetch'],
    totalResults,
    articles,
    isLoading: loading.effects['news/initFetch'],
  };
})(IndexPage);
