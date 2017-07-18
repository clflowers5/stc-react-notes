import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Grid, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import NoteService from '../services/noteService';
import { createNote, editNote } from '../actions/note';
import '../style/CreateNote.scss';

class CreateNote extends Component {

  constructor(props) {
    super(props);
    this.match = this.props.match;
    this.noteService = new NoteService();
    this.state = {
      action: 'Create',
      note: {}
    };
  }

  componentWillMount() {
    const noteId = this.match.params.id;

    if (noteId) {
      const note = this.props.notes.get(Number(noteId));
      this.setState({
        action: 'Edit',
        note: note,
        id: Number(noteId)
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.disableSubmit();

    let action;
    let {title, content} = this.refs;

    if (this.state.action === 'Create') {
      action = createNote(findDOMNode(title).value, findDOMNode(content).value);
    } else {
      action = editNote(this.state.id, findDOMNode(title).value, findDOMNode(content).value);
    }

    this.props.dispatch(action);
    this.props.history.push('/');
  }

  disableSubmit() {
    const {submit} = this.refs;
    findDOMNode(submit).disabled = true;
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
              <FormControl type="textarea" ref="content" defaultValue={this.state.note.content} required/>
              <Button type="submit" ref="submit" bsStyle="primary">{this.state.action} Note</Button>
            </FormGroup>
          </form>

        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(CreateNote);
