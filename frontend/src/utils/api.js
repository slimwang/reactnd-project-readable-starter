const api = 'http://localhost:3001';

const headers = { Authorization: 'whatever-you-want' };

const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

const getPosts = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

const getPostDetail = post =>
  fetch(`${api}/posts/${post.id}`, { headers })
    .then(res => res.json());

const votePost = (post, type) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type }),
  });

const editPost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: post.title, body: post.body }),
  });

const deletePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  });

const getAllComments = post =>
  fetch(`${api}/posts/${post.id}/comments`, { headers })
    .then(res => res.json());

const addComment = (post, comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });

const getCommentDetail = comment =>
  fetch(`${api}/comments/${comment.id}/`, { headers })
    .then(res => res.json());

const voteComment = (comment, type) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type }),
  });

const editComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ timestamp: Date.now(), body: comment.body }),
  });

const deleteComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  });

export {
  getCategories,
  getPosts,
  getAllPosts,
  addPost,
  getPostDetail,
  votePost,
  editPost,
  deletePost,
  getAllComments,
  addComment,
  getCommentDetail,
  voteComment,
  editComment,
  deleteComment,
};
