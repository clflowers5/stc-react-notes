import '../style/App.css';
import React, { Component } from 'react';
import NoteList from './NoteList';
import Header from './Header';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Router history={history}>
          <div>
            <Route exact path="/" component={NoteList}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
