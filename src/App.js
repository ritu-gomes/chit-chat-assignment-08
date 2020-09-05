import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Posts/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/Post">
          <Post></Post>
        </Route>
        <Route path="/:postId">
          <SinglePost/>
        </Route>
        <Route exact path="/">
          <Post></Post>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
