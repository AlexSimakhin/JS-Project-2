export const getHashProduct = async function (hash = localStorage.getItem('hash')) {
  let response = await fetch('https://lab.lectrum.io/js2/api/zavidovo/products/' + hash, {
    method: 'GET',
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status === 200) {
    return result.data;
  }
};