import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { addPost } from '../actions';
import randomID from 'random-id';

class CreateEditPost extends Component {
  handleSumit = (e) => {
    e.preventDefault();
    const post = serializeForm(e.target, { hash: true });
    post.id = randomID(18);
    post.timestamp = Date.now();
    this.props.addPost(post);
  }

  render() {
    const { categories } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleSumit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input name="title" placeholder="post title" />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input type="textarea" name="body" />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input name="author" placeholder="post author" />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <select name="category" className="form-control" id="exampleFormControlSelect1">
              {categories.map(category => (
                <option key={category}>{category}</option>
                ))}
            </select>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.reduce((accumulator, c) => {
      accumulator.push(c.name);
      return accumulator;
    }, []),
  };
}

const mapDispatchToProps = dispatch => ({
  addPost: data => dispatch(addPost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPost);
