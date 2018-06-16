import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Post from './Post';

class PostDetail extends Component {
  render() {
    return (
      <Container>
        <ListGroup>
          <ListGroupItem>Comment</ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

export default PostDetail;
