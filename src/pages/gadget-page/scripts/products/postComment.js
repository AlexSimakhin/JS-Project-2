import { addComment } from './addComment';

export const postComment = async (value) => {
  let response = await fetch(`https://lab.lectrum.io/js2/api/zavidovo/products/${localStorage.getItem('hash')}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': localStorage.getItem('token'),
    },
    body: JSON.stringify(value),
  });

  let result = await response.json();

  if (response.status === 200) {
    addComment(result.data);
  }
};