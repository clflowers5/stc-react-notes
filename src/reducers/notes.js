import { ADD_NOTE, DELETE_NOTE } from '../actions/note';
import Immutable from 'immutable';

const initialState = Immutable.Map({});

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return state.set(action.id, {
        title: action.title,
        content: action.content
      });

    case DELETE_NOTE:
      return state.remove(String(action.id));

    default:
      return state;
  }
};

export default notes;
