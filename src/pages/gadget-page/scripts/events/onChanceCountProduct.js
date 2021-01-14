import { changeCounterItem, showCartItems } from '../cart';

const cartList = document.getElementById('cartList');

export const onChanceCountProduct = () => {
  cartList.onchange = (event) => {
    let target = event.target;
    let itemBlock = target.parentNode.querySelector('.item_name');
  
    changeCounterItem(itemBlock.dataset.hash, target.value);
    showCartItems();
  };
};