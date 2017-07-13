import React from 'react';
import Note from './Note';
import { Grid, Row, Col } from 'react-bootstrap';

const style = {
  marginTop: 20,
  marginBottom: 20
};

const NoteList = () => (
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

export default NoteList;
