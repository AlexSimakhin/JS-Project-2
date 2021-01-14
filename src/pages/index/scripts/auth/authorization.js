import { getProfile } from './getProfile';

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const profile = document.getElementById('profile');
const addGadgetLink = document.getElementById('addGadgetLink');
const cartIcon = document.getElementById('cartIcon');

export const authorization = () => {
  getProfile();
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'flex';

  profile.classList.remove('hidden');
  
  if (cartIcon) {
    cartIcon.classList.remove('hidden');
  }
  
  if (addGadgetLink !== null) {
    addGadgetLink.classList.remove('hidden');
  }
};