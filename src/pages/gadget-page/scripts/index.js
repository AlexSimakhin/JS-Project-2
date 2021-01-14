import '../../../css/style.css';
import '../../../css/gadget-page.css';


import { authorization } from '../../index/scripts/auth/authorization';
import { reAuthorization } from '../../index/scripts/auth/reAuthorization';
import { resetFormLinks } from '../../index/scripts/index';
import { getHashProduct, addProduct, postComment, deleteComment } from './products';
import { addToCartProduct, showCartItems } from './cart';
import * as events from '../../index/scripts/events';
import { onChanceCountProduct, onClickDeleteProductFromCart } from './events';

const overlay = document.getElementById('overlay');
const btnCart = document.getElementById('btnCart');
const characteristics = document.getElementById('characteristics');
const characteristicsPane = document.getElementById('characteristicsPane');
const reviews = document.getElementById('reviews');
const reviewsPane = document.getElementById('reviewsPane');
const editButton = document.getElementById('editButton');
const itemColorValue = document.getElementById('item-color-value');
const itemValue = document.getElementById('item-value');
const feedbackForm = document.getElementById('feedback-form');
const userReviews = document.getElementById('userReviews');
const editProduct = document.getElementById('editProduct');
const closeEditProduct = document.getElementById('closeEditProduct');
const popupAddToCart = document.getElementById('popupAddToCart');


itemColorValue.onclick = (event) => {
  let allCircles = document.querySelectorAll('.circle');
  allCircles.forEach(item => item.classList.remove('selected'));
  let target = event.target.closest('.circle');
  if (!target) return;
  target.classList.add('selected');
};

itemValue.onclick = (event) => {
  let allParams = document.querySelectorAll('.param');
  allParams.forEach(item => item.classList.remove('selected'));
  let target = event.target.closest('.param');
  if (!target) return;
  target.classList.add('selected');
};

characteristics.onclick = () => {
  reviews.classList.remove('active');
  reviewsPane.classList.remove('show');
  characteristics.classList.add('active');
  characteristicsPane.classList.add('show');
};

reviews.onclick = () => {
  characteristics.classList.remove('active');
  characteristicsPane.classList.remove('show');
  reviews.classList.add('active');
  reviewsPane.classList.add('show');
};

editButton.onclick = () => {
  overlay.classList.add('visible');
  editProduct.classList.remove('hidden');
  editProduct.classList.add('popup-show');
};

closeEditProduct.onclick = () => {
  overlay.classList.remove('visible');
  editProduct.classList.remove('popup-show');
  editProduct.classList.add('hidden');
};

events.openLoginForm();
events.clickOnRegistrationTab();
events.clickOnLoginTab();
events.closeLoginForm();
events.openCart();
events.closeCart();

events.registration({
  'product-access': true,
});
events.login({
  'product-access': true,
});
events.logout();

onChanceCountProduct();
onClickDeleteProductFromCart();

// Добавление в корзину продукта (+попап)
if (btnCart !== null) {
  btnCart.onclick = () => {
    addToCartProduct();
    showCartItems();

    fadeIn(popupAddToCart);

    setTimeout(() => {
      fadeOut(popupAddToCart);
    }, 3000);
  };
}


const fadeIn = (el) => {
  let opacity = 0.01;

  el.style.display = 'flex';

  let timer = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(timer);
    }

    el.style.opacity = opacity;
    opacity += opacity * 0.1;
  }, 10);
};

const fadeOut = (el) => {
  let opacity = 1;

  let timer = setInterval(() => {
    if (opacity <= 0.1) {
      clearInterval(timer);
      el.style.display = 'none';
    }

    el.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 10);
};

feedbackForm.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get('name');
  const pros = formData.get('pros');
  const cons = formData.get('cons');

  const commentBlock = {
    'name': name,
    'pros': pros,
    'cons': cons,
  };

  postComment(commentBlock);
  resetFormLinks();
};

userReviews.onclick = (event) => {
  let target = event.target.closest('.close-icon');
  if (!target) return;

  deleteComment(target.dataset.hash);
};

// Re-Authorization
(function () {
  if (localStorage.getItem('token')) {
    reAuthorization().then((status) => {
      if (status === 204) {
        authorization();
        editButton.classList.remove('hidden');
        getHashProduct().then((value) => {
          addProduct(value);
        });
        showCartItems();
      }
    });
  }
}());