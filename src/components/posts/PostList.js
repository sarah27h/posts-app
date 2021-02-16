import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { useStyles } from './PostListStyle';

export default function PostList({ posts }) {
  const classes = useStyles();

  const postList = posts.map((post) => {
    return (
      <Grid item xs key={post.id}>
        <Paper variant="outlined" className={classes.paper}>
          <Link component={RouterLink} underline="hover" to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
        </Paper>
      </Grid>
    );
  });

  return <ul className={classes.list}>{postList}</ul>;
}
