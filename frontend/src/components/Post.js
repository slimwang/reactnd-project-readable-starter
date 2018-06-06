import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <ListGroup>
        <Link to="/post-detail" style={{ textDecoration: 'none' }}>
          <ListGroupItem>
            <div className="d-flex w-100 justify-content-between">
              <ListGroupItemHeading className="mb-1">Title</ListGroupItemHeading>
              <small>3 days ago</small>
            </div>
            <small>Author</small>
          </ListGroupItem>
        </Link>
      </ListGroup>);
  }
}

export default Post;
