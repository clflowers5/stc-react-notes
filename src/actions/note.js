const ADD_NOTE_TO_LIST = 'ADD_NOTE_TO_LIST';
const CREATE_NOTE = 'CREATE_NOTE';
const EDIT_NOTE_IN_LIST = 'EDIT_NOTE_IN_LIST';
const EDIT_NOTE = 'EDIT_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const GET_NOTES = 'GET_NOTES';
const GET_NOTES_RECEIVED = 'GET_NOTES_RECEIVED';

function addNoteToList(id, title, content) {
  return {
    type: ADD_NOTE_TO_LIST,
    id,
    title,
    content
  };
}

function editNoteInList(id, title, content) {
  return {
    type: EDIT_NOTE_IN_LIST,
    id,
    title,
    content
  };
}

function createNote(title, content) {
  return {
    type: CREATE_NOTE,
    title,
    content
  }
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
  ADD_NOTE_TO_LIST,
  EDIT_NOTE_IN_LIST,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  GET_NOTES_RECEIVED,
  addNoteToList,
  editNoteInList,
  createNote,
  editNote,
  deleteNote,
  getNotes
}
