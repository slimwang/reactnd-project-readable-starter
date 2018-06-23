import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { MdAdd } from 'react-icons/lib/md';
import serializeForm from 'form-serialize';
import randomID from 'random-id';
import { addComment } from '../actions';

class AddEditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleSumit = (e) => {
    e.preventDefault();
    const comment = serializeForm(e.target, { hash: true });
    comment.id = randomID(18);
    comment.timestamp = Date.now();
    comment.parentId = this.props.postID;
    this.props.dispatch(addComment({ comment }));
    this.toggle();
  }

  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Button onClick={this.toggle} className="ml-2" outline color="primary" size="sm">
          <MdAdd /> Add New Comment
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form onSubmit={this.handleSumit}>
            <ModalBody>
              <FormGroup>
                <Label for="body">Body</Label>
                <Input type="textarea" name="body" />
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input name="author" placeholder="post author" />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Submit</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect()(AddEditComment);
