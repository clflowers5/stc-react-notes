import axios from 'axios';

class NoteService {
  constructor() {
    this.resource = '/notes';
    this.baseUrl = process.env.REACT_APP_API_URL + this.resource;
  }

  getAllNotes(limit = null, start = null, order = null) {
    const url = this.baseUrl + buildQueryString({limit, start, order});
    return axios.get(url);
  }

  getSingleNote(noteId) {
    const url = this.baseUrl + `/${noteId}`;
    return axios.get(url);
  }

  createNote(userId, title, content) {
    const url = this.baseUrl;
    const reqBody = {userId, title, content};
    return axios.post(url, reqBody);
  }

  updateNote(userId, noteId, title, content) {
    const url = this.baseUrl + `/${noteId}`;
    const reqBody = {title, content};
    return axios.put(url, reqBody);
  }

  deleteNote(noteId) {
    const url = this.baseUrl + `/${noteId}`;
    return axios.delete(url);
  }

}

function buildQueryString(params) {
  const url = Object.entries(params).reduce((result, value) => {
    return result.concat(value[1] ? `${value[0]}=${value[1]}` : null);
  }, []).filter(e => e).join('&');

  return url ? `?${url}` : '';
}

export default NoteService;
