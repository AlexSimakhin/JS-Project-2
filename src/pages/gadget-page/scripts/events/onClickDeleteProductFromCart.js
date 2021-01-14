import { deleteProductFromCart, showCartItems } from '../cart';

const cart = document.getElementById('cart');

export const onClickDeleteProductFromCart = () => {
  cart.onclick = (event) => {
    let target = event.target.closest('.control-remove');
    if (!target) return;
  
    let itemBlock = target.parentNode.querySelector('.item_name');
  
    deleteProductFromCart(itemBlock.dataset.hash);
    showCartItems();
  };
};