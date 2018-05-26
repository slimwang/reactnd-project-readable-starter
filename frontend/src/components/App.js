import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CategoryList from './CategoryList';

const categories = ['All', 'Comedy', 'Science Fiction', 'Thriller'];

class App extends Component {
  render() {
    return (
      <Container>
        <CategoryList categories={categories} />
      </Container>
    );
  }
}

export default App;
