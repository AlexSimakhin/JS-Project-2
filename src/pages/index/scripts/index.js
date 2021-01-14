import '../../../css/index.css';
import '../../../css/style.css';

import { authorization, reAuthorization } from './auth';
import { getProducts } from './products/getProducts';
import { openLoginForm, clickOnRegistrationTab, clickOnLoginTab, closeLoginForm, openCart, closeCart, login, registration, logout } from './events';
import { onChanceCountProduct, onClickDeleteProductFromCart } from '../../gadget-page/scripts/events';

const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');
const cards = document.getElementById('cards');


const resetFormLinks = () => {
  loginForm.querySelectorAll('.tab_pane').forEach((el) => {
    el.classList.remove('show');
  });
};

const saveTokenToLocaleStorage = (token) => {
  localStorage.setItem('token', token);
};

const saveHashToLocaleStorage = (hash) => {
  localStorage.setItem('hash', hash);
};

const closePopUp = () => {
  overlay.classList.remove('visible');
  loginForm.classList.remove('popup-show');
};


openLoginForm();
clickOnRegistrationTab();
clickOnLoginTab();
closeLoginForm();
openCart();
closeCart();

registration({'product-access': true});
login({'product-access': true});
logout();

onChanceCountProduct();
onClickDeleteProductFromCart();


if (cards) {
  cards.onclick = (event) => {
    event.preventDefault();
  
    let target = event.target.closest('a');
    if (target === null) return;
  
    if (target.dataset.hash) {
      saveHashToLocaleStorage(target.dataset.hash);
    }
  
    document.location = target.href;
  };
}

  
// Re-Authorization
(function () {
  if (localStorage.getItem('token')) {
    reAuthorization().then((status) => {
      if (status === 204) {
        authorization();
        getProducts();
      }
    });
  }
}());

export { resetFormLinks, saveTokenToLocaleStorage, saveHashToLocaleStorage, closePopUp };