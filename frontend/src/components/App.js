import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';
import PostDetail from './PostDetail';
import CreateEditPost from './CreateEditPost';
import * as API from '../utils/api';

const categories = ['All', 'Comedy', 'Science Fiction', 'Thriller'];

class App extends Component {
  render() {
    // API.getCategories().then(c => console.log(c));
    return (
      <Container>
        <CategoryList categories={categories} />
        <Route
          path="/(|All)/"
          exact
          render={() => (
            <PostList />
          )}
        />
        <Route
          path="/post-detail"
          render={() => (
            <PostDetail />
          )}
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
