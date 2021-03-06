const ADD_NOTE_TO_LIST = 'ADD_NOTE_TO_LIST';
const CREATE_NOTE = 'CREATE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const REMOVE_NOTE_FROM_LIST = 'REMOVE_NOTE_FROM_LIST';
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

function removeNoteFromList(id) {
  return {
    type: REMOVE_NOTE_FROM_LIST,
    id
  };
}

function getNotes() {
  return {
    type: GET_NOTES
  };
}

function getNotesReceived(data) {
  return {
    type: GET_NOTES_RECEIVED,
    data: data
  };
}

export {
  ADD_NOTE_TO_LIST,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  REMOVE_NOTE_FROM_LIST,
  GET_NOTES,
  GET_NOTES_RECEIVED,
  addNoteToList,
  createNote,
  editNote,
  deleteNote,
  removeNoteFromList,
  getNotes,
  getNotesReceived
}
