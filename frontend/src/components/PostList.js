import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { MdAdd, MdSort } from 'react-icons/lib/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Post from './Post';
import * as API from '../utils/api';
import { getAllPosts, sortBy } from '../actions';

class PostList extends Component {
  componentDidMount() {
    API.getAllPosts().then(res => this.props.dispatch(getAllPosts({ posts: res })));
  }
  render() {
    const { posts } = this.props;
    const { category } = this.props.match.params === {} ? this.props.match.params : { category: 'All' };
    return (
      <div>
        <Container className="mb-3 d-flex w-100 justify-content-between">
          <ButtonGroup>
            <Button onClick={() => this.props.dispatch(sortBy({ by: 'voteScore' }))} outline color="primary">
              <span className="mr-2"><MdSort /></span>Order by VoteScore
            </Button>
            <Button onClick={() => this.props.dispatch(sortBy({ by: 'voteScore' }))} outline color="primary">
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
          {posts.filter(post => category === 'All' || post.category === category).map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps)(PostList);
