import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import '../style/NoteList.scss';
import Note from './Note';
import { Grid, Row, Col } from 'react-bootstrap';
import chunk from 'lodash/chunk';
import NoteService from '../services/noteService';
import { addNote } from '../actions/note';

const style = {
  marginTop: 20,
  marginBottom: 20
};

//TODO: refactor all the key gen
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      notes: []
    };
    this.noteService = new NoteService();
  }

  componentDidMount() {
    this.noteService.getAllNotes()
      .then(notes => {
        notes.data.data.forEach(note => this.props.dispatch(addNote(note.id, note.title, note.content)));
        this.setState({
          notes: notes.data.data
        });
      });
  }

  groupNotes() {
    return chunk(this.state.notes, 3);
  }

  notesRow(notes) {
    //TODO: pull this into scss
    const style = {
      marginBottom: 20
    };
    return (
      //TODO: this is bad
      <Row key={Math.random()} style={style}>
        {notes.map(note => this.noteColumn(note))}
      </Row>
    );
  }

  noteColumn(note) {
    return (
      <Col key={note + note.id} xs={6} md={4}>
        <Note key={note.id} id={note.id} title={note.title} content={note.content}/>
      </Col>
    );
  }

  render() {
    const noteGroups = this.groupNotes();
    return (
      <div style={style}>
        <Grid>
          {noteGroups.length
            ? noteGroups.map(group => this.notesRow(group))
            : <ReactLoading className="loading-icon" type="spin" color="#444"/>}
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

export default connect(mapStateToProps)(NoteList);
