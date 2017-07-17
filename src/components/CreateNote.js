import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Grid, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../style/CreateNote.scss';
import NoteService from '../services/noteService';
import { addNote } from '../actions/note';

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
    const note = this.props.notes.get(Number(noteId));

    if (noteId) {
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

    const userId = 0; // Replace this with valid value if I get to User Auth
    let {title, content} = this.refs;

    if (this.state.action === 'Create') {
      this.noteService.createNote(userId, findDOMNode(title).value, findDOMNode(content).value)
        .then(resp => {
          const {id, title, content} = resp.data.data;
          const action = addNote(id, title, content);
          this.props.dispatch(action);
          this.props.history.push('/');
        });
    } else {
      title = findDOMNode(title).value;
      content = findDOMNode(content).value;
      this.noteService.updateNote(userId, this.state.id, title, content)
        .then(() => {
          const action = addNote(this.state.id, title, content);
          this.props.dispatch(action);
          this.props.history.push('/');
        });
    }
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
