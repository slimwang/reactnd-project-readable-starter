import React, { Component } from 'react';
import { Badge, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { FaThumbsOUp, FaThumbsODown, FaEdit, FaTrashO } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import { voteComment } from '../actions';

class Comment extends Component {
  handleVotePost(event, comment) {
    const voteType = event.target.name;
    const commentID = comment.id;
    this.props.dispatch(voteComment({ commentID, voteType }));
  }
  render() {
    let { comments } = this.props;
    if (comments === undefined) {
      comments = [{
        id: 'loading',
        parentId: 'loading',
        timestamp: 1469479767190,
        body: 'loading',
        author: 'loading',
        voteScore: 0,
        deleted: false,
        parentDeleted: false,
      },
      ];
    }
    return (
      comments.map(comment => (
        <ListGroup key={comment.id}>
          <ListGroupItem>
            <div className="d-flex w-100 justify-content-between">
              <ListGroupItemHeading className="mb-1">
                {comment.body}
                <Button className="ml-2" outline color="primary" size="sm">
                  <FaEdit /> Edit
                </Button>
                <Button className="ml-2" outline color="primary" size="sm">
                  <FaTrashO /> Delete
                </Button>
              </ListGroupItemHeading>
            </div>
            <div className="d-flex w-100 justify-content-between">
              <small>{comment.author}</small>
              <div>
                <Badge color="secondary" pill>{comment.voteScore} votes</Badge>
                <Button onClick={e => this.handleVotePost(e, comment)} name="upVote" color="link">
                  <FaThumbsOUp />
                </Button>
                <Button onClick={e => this.handleVotePost(e, comment)} name="downVote" color="link">
                  <FaThumbsODown />
                </Button>

              </div>
            </div>
          </ListGroupItem>
        </ListGroup>))
    );
  }
}

export default connect()(Comment);
