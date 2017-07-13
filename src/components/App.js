import React, { Component } from 'react';
import '../style/App.css';
import NoteList from './NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Note Taker</h2>
        </div>
        <NoteList/>
      </div>
    );
  }
}

export default App;
