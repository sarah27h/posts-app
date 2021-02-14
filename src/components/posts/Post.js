import React from 'react';

export default function Post({ post }) {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.author}</p>
    </li>
  );
}
