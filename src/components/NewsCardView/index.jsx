import React, {memo} from 'react';
import moment from 'moment';

import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, Card, makeStyles, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const TRANSPARENT_IMG_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const NewsCardView = ({article}) => {

  const classes = useStyles();

  if (!article) {
    return;
  }

  return (
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
  );
};

export default memo(NewsCardView);
