export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

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
