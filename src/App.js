import './App.css';
import Navbar from './components/layouts/Navbar';
import CreateNewPost from './components/views/CreateNewPost';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/posts/Post';
import NotFound from './components/layouts/NotFound';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container maxWidth="sm">
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
