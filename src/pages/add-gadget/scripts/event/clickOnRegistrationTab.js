import { resetFormLinks } from '../../../index/scripts/index';

const regLink = document.getElementById('regLink');
const loginLink = document.getElementById('loginLink');

export const clickOnRegistrationTab = () => {
  regLink.onclick = () => {
    resetFormLinks();
  
    regPane.classList.add('show');
    regLink.classList.add('active');
    loginLink.classList.remove('active');
  };
};