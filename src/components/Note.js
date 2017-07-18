import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Note.scss';
import { deleteNote, removeNoteFromList } from '../actions/note';
import { LinkContainer } from 'react-router-bootstrap';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  removeNote(evt, id) {
    evt.preventDefault();
    this.props.dispatch(deleteNote(id));
    this.props.dispatch(removeNoteFromList(id));
  }

  render() {
    return (
      <LinkContainer to={{pathname: `edit/${this.props.id}`}}>
        <div>
          <div className="Note">
            <button type="button" className="close" aria-label="Close" onClick={(evt) => this.removeNote(evt, this.props.id)}>
              <span aria-hidden="true">&times;</span>
            </button>
            <p className="title">{this.props.title}</p>
            <p className="content">{this.props.content}</p>
          </div>
        </div>
      </LinkContainer>
    );
  }
}

export default connect()(Note);
