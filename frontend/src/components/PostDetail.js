import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import Post from './Post';

class PostDetail extends Component {
  render() {
    return (
      <Container>
        <Post></Post>
        <ListGroup>
          <ListGroupItem>Comment</ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

export default PostDetail;
