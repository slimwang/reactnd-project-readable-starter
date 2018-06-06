import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CategoryList from './CategoryList';
import PostList from './PostList';
import PostDetail from './PostDetail';

const categories = ['All', 'Comedy', 'Science Fiction', 'Thriller'];

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList categories={categories} />
        <PostList />
        <PostDetail />
      </Container>
    );
  }
}

export default App;
