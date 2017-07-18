import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { Grid, Col } from 'react-bootstrap';
import Note from './Note';
import '../style/NoteList.scss';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  renderNoteColumn(note) {
    note = note[1];
    return (
      <Col key={'note-col-' + note.id} xs={12} sm={6} lg={4}>
        <Note key={note.id} id={note.id} title={note.title} content={note.content}/>
      </Col>
    );
  }

  render() {
    return (
      <div>
        <Grid>
          {
            this.props.notes.size
              ? this.props.notes.entrySeq().map(note => this.renderNoteColumn(note))
              : <ReactLoading className="loading-icon" type="spin" color="#444"/>
          }
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
