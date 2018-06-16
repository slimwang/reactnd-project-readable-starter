import React, { Component } from 'react';
import { Badge, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaThumbsOUp, FaThumbsODown, FaEdit, FaTrashO } from 'react-icons/lib/fa';


class Post extends Component {
  render() {
    const { post } = this.props;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = Date.now();
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <ListGroupItemHeading className="mb-1">
              <Link to="/post-detail" style={{ textDecoration: 'none' }}>
                {post.title} - {post.category}
              </Link>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaEdit /> Edit
              </Button>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaTrashO /> Delete
              </Button>
            </ListGroupItemHeading>
            <small>{Math.round(Math.abs((today - post.timestamp) / (oneDay)))} days ago</small>
          </div>
          <div className="d-flex w-100 justify-content-between">
            <small>{post.author}</small>
            <div>
              <Badge color="primary" pill>{post.commentCount} comments</Badge>
              <Badge color="secondary" pill>{post.voteScore} votes</Badge>
              <FaThumbsOUp />
              <FaThumbsODown />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>);
  }
}

export default Post;
