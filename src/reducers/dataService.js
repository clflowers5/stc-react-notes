import { GET_NOTES, CREATE_NOTE, EDIT_NOTE, DELETE_NOTE, addNoteToList, getNotesReceived } from '../actions/note';
import NoteService from '../services/noteService';

const noteService = new NoteService();

const dataService = store => next => action => {
  next(action);
  switch (action.type) {
    case GET_NOTES:
      noteService.getAllNotes()
        .then(res => {
          const data = res.data.data;
          const action = getNotesReceived(data);
          next(action);
        });

      break;

    case CREATE_NOTE:
      //TODO: hardcoding user id 0 for now
      noteService.createNote(0, action.title, action.content)
        .then(resp => {
          const {id, title, content} = resp.data.data;
          const action = addNoteToList(id, title, content);
          next(action);
        });

      break;

    case EDIT_NOTE:
      noteService.updateNote(0, action.id, action.title, action.content)
        .then(() => next(action));
      break;

    case DELETE_NOTE:
      noteService.deleteNote(action.id)
        .then(() => next(action));
      break;

    default:
      break;
  }
};

export default dataService
