import React, { Component } from 'react';
import { Badge, Button, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { FaThumbsOUp, FaThumbsODown, FaEdit, FaTrashO } from 'react-icons/lib/fa';

class Comment extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex w-100 justify-content-between">
            <ListGroupItemHeading className="mb-1">
              body
              <Button className="ml-2" outline color="primary" size="sm">
                <FaEdit /> Edit
              </Button>
              <Button className="ml-2" outline color="primary" size="sm">
                <FaTrashO /> Delete
              </Button>
            </ListGroupItemHeading>
          </div>
          <div className="d-flex w-100 justify-content-between">
            <small>comment.author</small>
            <div>
              <Badge color="primary" pill>comment.commentCount comments</Badge>
              <Badge color="secondary" pill>comment.voteScore votes</Badge>
              <FaThumbsOUp />
              <FaThumbsODown />
            </div>
          </div>
        </ListGroupItem>
      </ListGroup>);
  }
}

export default Comment;
