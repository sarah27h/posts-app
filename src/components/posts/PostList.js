import React from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ posts }) {
  const postList = posts.map((post) => {
    return (
      <div key={post.id}>
        <Link to={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
        </Link>
      </div>
    );
  });

  return <ul>{postList}</ul>;
}
