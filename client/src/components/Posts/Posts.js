import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
    // if no posts show loading, else show posts
    !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {/* iterate over posts and generate them in feed */}
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
