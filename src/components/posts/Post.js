import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function Post() {
  const { id } = useParams();

  const { data: post, isPending, errorMessage } = useFetch(`http://localhost:8000/posts/${id}`);

  return (
    <li>
      {id}
      {isPending && <p>Loading.....</p>}
      {errorMessage && <p>Can't fetch data</p>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>{post.author}</p>
        </article>
      )}
    </li>
  );
}
