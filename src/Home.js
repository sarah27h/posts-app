import { useEffect, useState } from 'react';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import PostList from './components/posts/PostList';

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [pending, setPending] = useState(true);

  //npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/posts')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      {pending && <p>Loading....</p>}
      {posts && <PostList posts={posts} />}
      <Footer />
    </div>
  );
}
