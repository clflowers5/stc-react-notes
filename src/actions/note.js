const ADD_NOTE = 'ADD_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

function addNote(title, content) {
  return {
    type: ADD_NOTE,
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
  }
}

function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  }
}

export {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  addNote,
  editNote,
  deleteNote
}
