import { GET_NOTES, CREATE_NOTE, EDIT_NOTE, addNoteToList, editNoteInList } from '../actions/note';
import NoteService from './noteService';

const noteService = new NoteService();

const dataService = store => next => action => {
  next(action);
  switch (action.type) {
    case GET_NOTES:
      noteService.getAllNotes()
        .then(res => {
          const data = res.data.data;
          next({
            type: 'GET_NOTES_RECEIVED',
            data
          });
        })
        .catch(err => {
          return next({
            //TODO: error type here?
            type: 'GET_NOTES_ERROR',
            err
          });
        });

      break;

    case CREATE_NOTE:
      //TODO: hardcoding user id 0 for now
      noteService.createNote(0, action.title, action.content)
        .then(resp => {
          const {id, title, content} = resp.data.data;
          const action = addNoteToList(id, title, content);
          store.dispatch(action);
        });

      break;

    case EDIT_NOTE:
      noteService.updateNote(0, action.id, action.title, action.content)
        .then(resp => {
          console.log(resp);
          const {id, title, content} = resp.data.data;
          const action = editNoteInList(id, title, content);
          store.dispatch(action);
        });

      break;

    default:
      break;
  }
};

export default dataService
