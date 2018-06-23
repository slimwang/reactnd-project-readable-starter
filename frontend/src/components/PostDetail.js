import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import Post from './Post';
import Comment from './Comment';
import * as API from '../utils/api';
import { getAllPosts, getAllComments } from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    if (Object.keys(this.props.post).length === 0) {
      API.getAllPosts()
        .then(res => this.props.dispatch(getAllPosts({ posts: res })))
    }
    console.log(this.props.match.params.postID);
    API.getAllComments(this.props.match.params.postID)
      .then(res => this.props.dispatch(getAllComments({ comments: res })));
  }
  render() {
    return (
      <Container>
        <Post post={this.props.post[0]} showDetail />
        <Comment comments={this.props.comments} />
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { postID } = ownProps.match.params;
  return {
    post: state.posts.filter(post => post.id === postID),
    comments: state.comments,
  };
}


export default connect(mapStateToProps)(PostDetail);
