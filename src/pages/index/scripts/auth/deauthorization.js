const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const profile = document.getElementById('profile');
const profileName = document.getElementById('profileName');
const addGadgetLink = document.getElementById('addGadgetLink');
const cartIcon = document.getElementById('cartIcon');

export const deauthorization = () => {
  loginBtn.style.display = 'flex';
  logoutBtn.style.display = 'none';

  profile.classList.add('hidden');

  if (cartIcon !== null) {
    cartIcon.classList.add('hidden');
  }
  
  if (addGadgetLink !== null) {
    addGadgetLink.classList.add('hidden');
  }
  
  profileName.innerHTML = '';

  localStorage.removeItem('token');
  location.reload();
};