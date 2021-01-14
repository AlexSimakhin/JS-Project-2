export const addToCartProduct = () => {
  let cartLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  let hash = localStorage.getItem('hash');

  let duplicate = false;

  cartLocalStorage.forEach((value) => {
    if (value.hash === hash) {
      duplicate = true;
      value.count += 1;
    }
  });

  if (!duplicate) {
    let product = {
      'hash': hash,
      'date': new Date().toISOString(),
      'count': 1,
    };

    cartLocalStorage.push(product);
    localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
  } else {
    localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
  } 
};