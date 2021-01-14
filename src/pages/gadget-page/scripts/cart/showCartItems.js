import { getHashProduct } from '../products/getHashProduct';

const cartList = document.getElementById('cartList');
const total = document.getElementById('total');

const generateItem = (obj, count) => `
  <div class="cart_item">
    <p data-hash="${obj.hash}" class="item_name">${obj.name}</p>
    <p class="item_price">$${obj.price}</p>
    <input type="text" class="item_count" value="${count}">

    <div class="control-remove">
      <img src="img/icon/plus.svg" alt="">
    </div>
    
  </div>
`;

export const showCartItems = async () => {
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  if (cartItems === null) return;

  let list = '';
  let price = 0;

  for (const item of cartItems) {
    let product = await getHashProduct(item.hash);
    list += generateItem(product, item.count);
    price += product.price * item.count;
  }

  if (cartList !== null) {
    cartList.innerHTML = null;
    cartList.insertAdjacentHTML('afterbegin', list);
    total.innerHTML = price;
  }
};