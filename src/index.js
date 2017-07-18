import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import { applyMiddleware, createStore } from 'redux';
import { GET_NOTES } from './actions/note';
import reducers from './reducers/rootReducer';
import dataService from './reducers/dataService';



const store = createStore(reducers, {}, applyMiddleware(dataService));

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

store.dispatch({type: GET_NOTES});

registerServiceWorker();
