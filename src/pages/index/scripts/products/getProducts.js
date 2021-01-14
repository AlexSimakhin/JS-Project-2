import { addProducts } from './addProducts';

export const getProducts = async function () {
  let response = await fetch('https://lab.lectrum.io/js2/api/zavidovo/products', {
    method: 'GET',
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status === 200) {
    addProducts(result);
  }
};