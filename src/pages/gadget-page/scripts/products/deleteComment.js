import { addComment } from './addComment';

export const deleteComment = async (value) => {
  let response = await fetch(`https://lab.lectrum.io/js2/api/zavidovo/products/${localStorage.getItem('hash')}/reviews/${value}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status === 200) {
    addComment(result.data);
  }
};