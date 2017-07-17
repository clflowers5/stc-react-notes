import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
import reducers from './reducers/rootReducer';
import { createStore } from 'redux'


const store = createStore(reducers);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

registerServiceWorker();
