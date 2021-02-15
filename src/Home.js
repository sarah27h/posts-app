import PostList from './components/posts/PostList';
import useFetch from './hooks/useFetch';

export default function Home() {
  const { data: posts, isPending, errorMessage } = useFetch('http://localhost:8000/posts');
  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {isPending && <p>Loading....</p>}
      {posts && <PostList posts={posts} />}
    </div>
  );
}
