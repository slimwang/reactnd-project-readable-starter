const api = 'http://localhost:3001';

const headers = { Authorization: 'whatever-you-want' };

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
