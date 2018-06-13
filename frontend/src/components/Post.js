import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaThumbsOUp, FaThumbsODown } from 'react-icons/lib/fa';


class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <Link to="/post-detail" style={{ textDecoration: 'none' }}>
              <ListGroupItemHeading className="mb-1">
                {post.title} - {post.category}
              </ListGroupItemHeading>
            </Link>
            <small>3 days ago</small>
          </div>
          <div className="d-flex w-100 justify-content-between">
            <small>{post.author}</small>
            <div>
              <Badge color="primary" pill>{post.commentCount} comments</Badge>
              <Badge color="secondary" pill>{post.voteScore} votes</Badge><FaThumbsOUp /><FaThumbsODown />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>);
  }
}

export default Post;
