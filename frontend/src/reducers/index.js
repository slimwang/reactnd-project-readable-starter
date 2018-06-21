import { combineReducers } from 'redux';
import {
  GET_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  REMOVE_POST,
} from '../actions';
import * as API from '../utils/api';

function categories(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function posts(state = [], action) {
  // const { id, timestamp, title, body, author, category, voteScore, deleted } = action;

  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts;
    case ADD_POST:
      API.addPost(action.post);
      state.push(action.post);
      return state;
    case REMOVE_POST:
      return {};
    default:
      return state;
  }
}

export default combineReducers({ categories, posts });
