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
    const post = {
      id: '6b33fce8-1745-f8de-4ad8-4ee42585oprf',
      timestamp: Date.now(),
      title: 'title',
      body: 'body',
      author: 'author',
      category: 'react',
    };
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
