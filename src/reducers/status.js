import { FETCHING_DATA, RETRIEVED_DATA } from '../actions/status';
import { Map } from 'immutable';

const initialState = Map();

const status = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_DATA:
      return state.set('isFetching', true);

    case RETRIEVED_DATA:
      return state.set('isFetching', false);

    default:
      return state;
  }
};


export default status;
