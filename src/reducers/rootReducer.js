import { combineReducers } from 'redux';
import notesReducer from './notes';
import statusReducer from './status';

const rootReducer = combineReducers({
  notes: notesReducer,
  status: statusReducer
});

export default rootReducer;
