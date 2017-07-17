const ADD_NOTE = 'ADD_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const GET_NOTES = 'GET_NOTES';
const GET_NOTES_RECEIVED = 'GET_NOTES_RECEIVED';

function addNote(id, title, content) {
  return {
    type: ADD_NOTE,
    id,
    title,
    content
  };
}

function editNote(id, title, content) {
  return {
    type: EDIT_NOTE,
    id,
    title,
    content
  };
}

function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}

function getNotes() {
  return {
    type: GET_NOTES
  };
}

export {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  GET_NOTES_RECEIVED,
  addNote,
  editNote,
  deleteNote,
  getNotes
}
