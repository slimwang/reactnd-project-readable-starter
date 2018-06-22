import React, { Component } from 'react';
import { Badge, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaThumbsOUp, FaThumbsODown, FaEdit, FaTrashO } from 'react-icons/lib/fa';
import moment from 'moment';


class Post extends Component {
  render() {
    let { post } = this.props;
    if (post === undefined) {
      post = {
        id: 'loading',
        timestamp: 1467166872634,
        title: 'loading',
        body: 'loading',
        author: 'loading',
        category: 'loading',
        voteScore: 0,
        deleted: false,
        commentCount: 0,
      };
    }
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <ListGroupItemHeading className="mb-1">
              <Link to={`${post.category}/${post.id}`} style={{ textDecoration: 'none' }}>
                {post.title} - {post.category}
              </Link>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaEdit /> Edit
              </Button>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaTrashO /> Delete
              </Button>
            </ListGroupItemHeading>
            <small>{moment(post.timestamp).format('YYYY-MM-DD HH:mm:ss')}</small>
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
