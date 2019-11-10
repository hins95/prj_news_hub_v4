import React from 'react';
import { connect } from 'dva';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfiniteScroll from 'react-infinite-scroller';
import NewsCardView from '@/components/NewsCardView';

const useStyles = makeStyles(theme => ({
  loadingBlock: {
    marginTop: 90,
    marginBottom: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        hasMore={articles.length < totalResults && articles.length < 100 && articles.length !== 0}
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

                <NewsCardView article={article}/>
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
    totalResults,
    articles,
    isLoading: loading.effects['news/initFetch'],
  };
})(IndexPage);
