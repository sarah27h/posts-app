import './App.css';
import Navbar from './components/layouts/Navbar';
import CreateNewPost from './components/views/CreateNewPost';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/posts/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <CreateNewPost />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
