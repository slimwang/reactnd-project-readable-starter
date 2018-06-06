import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { MdAdd, MdSort } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import Post from './Post';

class PostList extends Component {
  render() {
    return (
      <div>
        <Container className="mb-3 d-flex w-100 justify-content-between">
          <ButtonGroup>
            <Button outline color="primary">
              <span className="mr-2"><MdSort /></span>Order by VoteScore
            </Button>
            <Button outline color="primary">
              <span className="mr-2"><MdSort /></span>Order by Timestamp
            </Button>
          </ButtonGroup>
          <Link to="/add-post">
            <Button outline color="primary">
              <span className="mr-2"><MdAdd /></span>Add New Post
            </Button>
          </Link>
        </Container>
        <Container>
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
      </div>
    );
  }
}

export default PostList;
