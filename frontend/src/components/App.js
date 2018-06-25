import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';
import PostDetail from './PostDetail';
import CreateEditPost from './CreateEditPost';

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList />
          <Switch>
            <Route
              path="/"
              component={PostList}
              exact
            />
            <Route
              path="/post/add"
              component={CreateEditPost}
              exact
            />
            <Route
              path="/post/:postID/edit"
              component={CreateEditPost}
              exact
            />
            <Route
              path="/:category"
              component={PostList}
              exact
            />
            <Route
              path="/:category/:postID"
              component={PostDetail}
              exact
            />
          </Switch>
      </Container>
    );
  }
}

export default App;
