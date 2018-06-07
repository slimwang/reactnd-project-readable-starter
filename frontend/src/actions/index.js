export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function addPost({
  id, timestamp, title, body, author, category, voteScore, deleted,
}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  };
}
export function removePost({ id, category }) {
  return {
    type: ADD_POST,
    id,
    category,
  };
}
