import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateEditPost extends Component {
  render() {
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
            <Input name="author" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateEditPost;
