const profileName = document.getElementById('profileName');

export const getProfile = async function () {
  let response = await fetch('https://lab.lectrum.io/js2/api/zavidovo/profile', {
    method: 'GET',
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  });

  let result = await response.json();

  if (response.status === 200) {
    profileName.innerHTML = result.data.name;
  }
};