import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostCard from './components/PostCard'
import Page404 from './components/Page404'
import PostsProvider from './components/PostsProvider';

function App() {
  return (
    /*
      create post
      post list

    */
    <div>
      <PostsProvider>

        <Router>
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/posts/new" component={PostCreate} />
            <Route path="/posts/:id([0-9]+)" component={PostCard} />
            <Route component={Page404} />
          </Switch>
        </Router>

      </PostsProvider>
    </div>

  );
}

export default App;
