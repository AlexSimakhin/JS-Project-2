const cart = document.getElementById('cart');
const overlay = document.getElementById('overlay');
const closeCartBtn = document.getElementById('closeCart');

export const closeCart = () => {
  closeCartBtn.onclick = () => {
    overlay.classList.remove('visible');
    cart.classList.remove('popup-show');
  };
};