import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {
  const postList = posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });

  return <ul>{postList}</ul>;
}
