import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import '../style/NoteList.scss';
import Note from './Note';
import { Grid, Col } from 'react-bootstrap';

const style = {
  marginTop: 20,
  marginBottom: 20
};

//TODO: refactor all the key gen
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
      <Col key={note + note.id} xs={12} sm={6} lg={4}>
        <Note key={note.id} id={note.id} title={note.title} content={note.content}/>
      </Col>
    );
  }

  render() {
    return (
      <div style={style}>
        <Grid>
          {this.props.notes.size
            ? this.props.notes.entrySeq().map(note => this.renderNoteColumn(note))
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
