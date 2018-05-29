import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Post from './Post';

class PostList extends Component {
  render() {
    return (
      <Container>
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
    );
  }
}

export default PostList;
