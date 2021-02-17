import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function Post() {
  const { id } = useParams();

  const history = useHistory();

  const { data: post, isPending, errorMessage } = useFetch(`http://localhost:8000/posts/${id}`);

  const handleDelete = (postId) => {
    // DELETE post to our api
    fetch(`http://localhost:8000/posts/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      // programatically direct user to home page
      history.push('/');
    });
  };

  return (
    <>
      <Box mt={5}>
        {isPending && <p>Loading.....</p>}
        {errorMessage && <p>Can't fetch data</p>}
        {post && (
          <article>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
            <p>{post.body}</p>
          </article>
        )}
        <Button onClick={() => handleDelete(post.id)} variant="contained" color="primary">
          delete post
        </Button>
      </Box>
    </>
  );
}
