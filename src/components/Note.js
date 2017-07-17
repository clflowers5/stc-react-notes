import React, { Component } from 'react';
import '../style/Note.scss';
import { LinkContainer } from 'react-router-bootstrap';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render() {
    return (
      <LinkContainer to={{pathname: `edit/${this.props.id}`}}>
        <div>
          <div className="Note">
            <p className="title">{this.props.title}</p>
            <p className="content">{this.props.content}</p>
          </div>
        </div>
      </LinkContainer>
    );
  }
}

export default Note;
