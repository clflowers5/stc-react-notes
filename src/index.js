import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import notesReducer from './reducers/notes';
import { createStore } from 'redux'


const store = createStore(notesReducer);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

registerServiceWorker();
