import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';
import PostDetail from './PostDetail';
import CreateEditPost from './CreateEditPost';

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList />
        <Route
          path="/"
          component={PostList}
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
        />
        <Route
          path="/(add-post|edit-post)/"
          render={() => (
            <CreateEditPost />
          )}
        />
      </Container>
    );
  }
}

export default App;
