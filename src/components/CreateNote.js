import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../style/CreateNote.scss';
import NoteService from '../services/noteService';

class CreateNote extends Component {

  constructor(props) {
    super(props);
    this.noteService = new NoteService();
  }

  componentWillMount() {
    this.setState({
      note: {}
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('handling event');

    //TODO: edit as well?

    const userId = 0; // Replace this with valid value if I get to User Auth
    let {title, content} = this.refs;
    this.noteService.createNote(userId, findDOMNode(title).value, findDOMNode(content).value)
      .then(this.props.history.push('/'));
  }

  render() {
    return (
      <div className="create-note">
        <Grid>
          <form onSubmit={(evt) => this.handleSubmit(evt)}>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl type="text" ref="title" defaultValue={this.state.note.title} autoFocus required/>
              <ControlLabel>Content</ControlLabel>
              <FormControl type="textarea" ref="content" defaultValue={this.state.note.text} required/>
              <Button type="submit" bsStyle="primary">Create Note</Button>
            </FormGroup>
          </form>

        </Grid>
      </div>
    );
  }

}

export default CreateNote;
