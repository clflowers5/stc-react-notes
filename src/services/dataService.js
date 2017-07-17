import NoteService from './noteService';

const noteService = new NoteService();

const dataService = store => next => action => {
  next(action);
  switch (action.type) {
    case 'GET_NOTES':
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
            type: 'GET_NOTES_ERROR',
            err
          });
        });

      break;
    default:
      break;
  }
};

export default dataService
