export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const SORT_BY = 'SORT_BY';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';

export function getCategories({ categories }) {
  return {
    type: GET_CATEGORIES,
    categories,
  };
}

export function getAllPosts({ posts }) {
  return {
    type: GET_ALL_POSTS,
    posts,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}
export function removePost({ id, category }) {
  return {
    type: ADD_POST,
    id,
    category,
  };
}
export function sortBy({ by }) {
  return {
    type: SORT_BY,
    by,
  };
}

export function getAllComments({ comments }) {
  return {
    type: GET_ALL_COMMENTS,
    comments,
  };
}
