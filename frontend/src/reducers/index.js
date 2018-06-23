import { combineReducers } from 'redux';
import sortBy from 'sort-by';
import {
  GET_CATEGORIES,
  GET_ALL_POSTS,
  ADD_POST,
  REMOVE_POST,
  SORT_BY,
  GET_ALL_COMMENTS,
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
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts;
    case ADD_POST:
      API.addPost(action.post);
      state.push(action.post);
      return state;
    case REMOVE_POST:
      return {};
    case SORT_BY:
      return state.slice().sort(sortBy(action.by)).reverse();
    default:
      return state;
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}

export default combineReducers({ categories, posts, comments });
