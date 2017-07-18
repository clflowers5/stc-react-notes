import { ADD_NOTE_TO_LIST, EDIT_NOTE, REMOVE_NOTE_FROM_LIST, GET_NOTES_RECEIVED } from '../actions/note';
import { OrderedMap } from 'immutable';

const initialState = OrderedMap();

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE_TO_LIST:
      let newState = OrderedMap(buildNote(action));
      return state.reduce((result, val) => {
        return result.set(val.id, buildNoteBody(val));
      }, newState);

    case EDIT_NOTE:
      return state.set(action.id, buildNoteBody(action));

    case REMOVE_NOTE_FROM_LIST:
      return state.remove(action.id);

    case GET_NOTES_RECEIVED:
      return action.data.reduce((result, note) => {
        return result.set(note.id, buildNoteBody(note));
      }, state);

    default:
      return state;
  }
};

function buildNote(data) {
  const note = {};
  note[data.id] = buildNoteBody(data);
  return note;
}

function buildNoteBody(data) {
  return {
    id: data.id,
    title: data.title,
    content: data.content
  };
}

export default notes;
