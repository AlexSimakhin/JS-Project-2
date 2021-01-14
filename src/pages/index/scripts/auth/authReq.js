export const authReq = async function () {
  let response = await fetch('https://lab.lectrum.io/js2/api/zavidovo/auth', {
    method: 'GET',
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  });

  if (response.status === 204) {
    return response.status;
  }
};