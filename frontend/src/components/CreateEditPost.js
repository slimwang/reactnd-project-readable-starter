import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

class CreateEditPost extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Container>
        <Form>
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
            <select className="form-control" id="exampleFormControlSelect1">
              {categories.map(category => (
                <option>{category}</option>
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

export default connect(mapStateToProps)(CreateEditPost);
