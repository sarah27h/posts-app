import PostList from './components/posts/PostList';
import useFetch from './hooks/useFetch';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function Home() {
  const { data: posts, isPending, errorMessage } = useFetch('http://localhost:8000/posts');
  return (
    <Box mt={5}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          {isPending && <p>Loading....</p>}
          {posts && <PostList posts={posts} />}
        </div>
      </Grid>
    </Box>
  );
}
