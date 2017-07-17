import React, { Component } from 'react';
import Header from './Header';
import NoteList from './NoteList';
import CreateNote from './CreateNote';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header/>
            <Route exact path="/" component={NoteList}/>
            <Route exact path="/create" component={CreateNote}/>
            <Route path="/edit/:id" component={CreateNote}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
