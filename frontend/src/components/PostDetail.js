import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import Post from './Post';
import * as API from '../utils/api';
import { getAllPosts, sortBy } from '../actions';

class PostDetail extends Component {
  componentWillMount() {
    API.getAllPosts().then(res => this.props.dispatch(getAllPosts({ posts: res })));
  }
  render() {
    return (
      <Container>
        <Post post={this.props.post[0]} />
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
    post: state.posts.filter(post => post.id === postID),
  };
}


export default connect(mapStateToProps)(PostDetail);
