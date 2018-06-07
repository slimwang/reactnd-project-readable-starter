import {
  ADD_POST,
  REMOVE_POST,
} from '../actions';

function reducer(state, action) {
  // const { id, timestamp, title, body, author, category, voteScore, deleted } = action;

  switch (action.type) {
    case ADD_POST:
      return {};
    case REMOVE_POST:
      return {};
    default:
      return state;
  }
}

export default reducer;
