import { resetFormLinks } from '../index';

const regLink = document.getElementById('regLink');
const loginLink = document.getElementById('loginLink');

export const clickOnLoginTab = () => {
  loginLink.onclick = () => {
    resetFormLinks();
  
    loginPane.classList.add('show');
    loginLink.classList.add('active');
    regLink.classList.remove('active');
  };
};