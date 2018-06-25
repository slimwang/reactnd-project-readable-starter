import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import randomID from 'random-id';
import { addPost, updatePost } from '../actions';

class CreateEditPost extends Component {
  handleSumit = (e, mode) => {
    e.preventDefault();
    const post = serializeForm(e.target, { hash: true });
    post.id = randomID(18);
    post.timestamp = Date.now();
    switch (mode) {
      case 'createMode':
        this.props.addPost(post);
        break;
      case 'editMode':
        this.props.updatePost(post);
        break;
      default:
        break;
    }
  }

  render() {
    const { categories, post } = this.props;
    const mode = post ? 'editMode' : 'createMode';
    return (
      <Container>
        <Form onSubmit={e => this.handleSumit(e, mode)}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input name="title" placeholder="post title" defaultValue={mode === 'editMode' ? post.title : ''} />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input type="textarea" name="body" defaultValue={mode === 'editMode' ? post.body : ''} />
          </FormGroup>
          {mode === 'createMode' &&
            (
              <FormGroup>
                <Label for="author">Author</Label>
                <Input name="author" placeholder="post author" defaultValue={mode === 'editMode' ? post.author : ''} />
              </FormGroup>
          )}
          {mode === 'createMode' &&
            (
              <FormGroup>
                <Label for="category">Category</Label>
                <select name="category" className="form-control" id="exampleFormControlSelect1">
                  {categories.map(category => (
                    <option key={category}>{category}</option>
                    ))}
                </select>
              </FormGroup>
          )}
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { postID } = ownProps.match.params;
  return {
    categories: state.categories.reduce((accumulator, c) => {
      accumulator.push(c.name);
      return accumulator;
    }, []),
    post: state.posts.filter(post => post.id === postID)[0],
  };
}

const mapDispatchToProps = dispatch => ({
  addPost: data => dispatch(addPost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPost);
