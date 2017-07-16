import React, { Component } from 'react';
import Note from './Note';
import { Grid, Row, Col } from 'react-bootstrap';
import NoteService from '../services/noteService';

const style = {
  marginTop: 20,
  marginBottom: 20
};

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.noteService = new NoteService();
  }

  componentDidMount() {
    this.noteService.getAllNotes()
      .then(notes => {
        console.log(notes);
        //  redux set state here
      });
  }

  render() {
    return (
      <div style={style}>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Note/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NoteList;
