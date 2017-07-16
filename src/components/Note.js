import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
   super(props);
   this.state = { ...props };

   this.style = {
     minHeight: 50,
     minWidth: 100,
     maxWidth: 300,
     borderRadius: 5,
     backgroundColor: 'red',
     padding: 10
   };
  }

  render() {
    return (
     <div className="Note" style={this.style}>
       <p>{this.props.title}</p>
       <p>{this.props.content}</p>
     </div>
    );
  }
}

export default Note;
