import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CategoryList from './CategoryList';
import PostList from './PostList';

const categories = ['All', 'Comedy', 'Science Fiction', 'Thriller'];

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList categories={categories} />
          <PostList />
      </Container>
    );
  }
}

export default App;
