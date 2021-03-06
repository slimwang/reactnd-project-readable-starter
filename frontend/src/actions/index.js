export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const SORT_BY = 'SORT_BY';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS';
export const VOTE_POST = 'VOTE_POST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

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

export function updatePost(post) {
  return {
    type: UPDATE_POST,
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

export function votePost({ postID, voteType }) {
  return {
    type: VOTE_POST,
    postID,
    voteType,
  };
}

export function voteComment({ commentID, voteType }) {
  return {
    type: VOTE_COMMENT,
    commentID,
    voteType,
  };
}

export function addComment({ comment }) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}
