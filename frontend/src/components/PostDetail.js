import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import Post from './Post';

class PostDetail extends Component {
  render() {
    console.log(this.props.post);
    return (
      <Container>
        <ListGroup>
          <ListGroupItem>Comment</ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { postID } = ownProps.match.params;
  return {
    post: state.posts,
  };
}


export default connect(mapStateToProps)(PostDetail);
