import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';
import PostList from './PostList';
import PostDetail from './PostDetail';

const categories = ['All', 'Comedy', 'Science Fiction', 'Thriller'];

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList categories={categories} />
        <Route
          path="/"
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
      </Container>
    );
  }
}

export default App;
