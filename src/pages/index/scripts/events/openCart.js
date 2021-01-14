import { showCartItems } from '../../../gadget-page/scripts/cart/showCartItems';

const cartIcon = document.getElementById('cartIcon');
const overlay = document.getElementById('overlay');
const cart = document.getElementById('cart');

export const openCart = () => {
  if (cartIcon) {
    cartIcon.onclick = () => {
      showCartItems();
      overlay.classList.add('visible');
      cart.classList.add('popup-show');
    };
  }
};