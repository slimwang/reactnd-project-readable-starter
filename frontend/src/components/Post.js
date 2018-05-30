import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

class Post extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <ListGroupItemHeading className="mb-1">Title</ListGroupItemHeading>
            <small>3 days ago</small>
          </div>
          <small>Author</small>
        </ListGroupItem>
      </ListGroup>);
  }
}

export default Post;
