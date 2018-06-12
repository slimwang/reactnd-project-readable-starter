import { combineReducers } from 'redux';
import {
  GET_CATEGORIES,
  ADD_POST,
  REMOVE_POST,
} from '../actions';

function categories(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {};
    default:
      return state;
  }
}

function posts(state = {}, action) {
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

export default combineReducers({ categories, posts });
