import React, { Component } from 'react';
import { Badge, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaThumbsOUp, FaThumbsODown, FaEdit, FaTrashO } from 'react-icons/lib/fa';
import moment from 'moment';
import { connect } from 'react-redux';
import { votePost } from '../actions';
import AddEditComment from './AddEditComment';


class Post extends Component {
  handleVotePost(event) {
    const voteType = event.target.name;
    const postID = this.props.post.id;
    this.props.dispatch(votePost({ voteType, postID }));
  }

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
    let title;
    if (!this.props.showDetail) {
      title = (
        <Link to={`${post.category}/${post.id}`} style={{ textDecoration: 'none' }}>
          {post.title} - {post.category}
        </Link>);
    } else {
      title = <span>{post.title} - {post.category}</span>;
    }
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <ListGroupItemHeading className="mb-1">
              {title}
              <Button className="ml-2" outline color="primary" size="sm">
                <FaEdit /> Edit
              </Button>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaTrashO /> Delete
              </Button>
              {this.props.showDetail &&
                <AddEditComment postID={post.id} />
              }
            </ListGroupItemHeading>
            <small>{moment(post.timestamp).format('YYYY-MM-DD HH:mm:ss')}</small>
          </div>
          {this.props.showDetail && <div className="mb-4 mt-2">{post.body}</div>}
          <div className="d-flex w-100 justify-content-between">
            <small>{post.author}</small>
            <div>
              <Badge color="primary" pill>{post.commentCount} comments</Badge>
              <Badge color="secondary" pill>{post.voteScore} votes</Badge>
              <Button onClick={e => this.handleVotePost(e)} name="upVote" color="link">
                <FaThumbsOUp />
              </Button>
              <Button onClick={e => this.handleVotePost(e)} name="downVote" color="link">
                <FaThumbsODown />
              </Button>
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>);
  }
}

export default connect()(Post);
