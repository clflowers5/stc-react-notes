import React, { Component } from 'react';
import Note from './Note';
import { Grid, Row, Col } from 'react-bootstrap';
import chunk from 'lodash/chunk';
import NoteService from '../services/noteService';

const style = {
  marginTop: 20,
  marginBottom: 20
};

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      activeNote: null
    };
    this.noteService = new NoteService();
  }

  componentDidMount() {
    this.noteService.getAllNotes()
      .then(notes => {
        console.log(notes);
        //  redux set state here
        this.setState({
          notes: notes.data.data
        });
      });
  }

  groupNotes() {
    return chunk(this.state.notes, 3);
  }

  notesRow(notes) {
    const style = {
      marginBottom: 20
    };
    return (
      <Row style={style}>
        {notes.map(note => this.noteColumn(note))}
      </Row>
    );
  }

  noteColumn(note) {
    return (
      <Col xs={6} md={4}>
        <Note key={note.id} title={note.title} content={note.content}/>
      </Col>
    );
  }

  render() {
    const noteGroups = this.groupNotes();
    return (
      <div style={style}>
        <Grid>
          {noteGroups.map(group => this.notesRow(group))}
        </Grid>
      </div>
    );
  }
}

export default NoteList;
