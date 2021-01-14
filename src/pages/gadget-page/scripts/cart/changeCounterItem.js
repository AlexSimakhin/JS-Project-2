export const changeCounterItem = (hash, countItem) => {
  let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));

  cartLocalStorage.forEach((value) => {
    if (value.hash === hash) {
      value.count = countItem;
    }
  });

  localStorage.setItem('cart', JSON.stringify(cartLocalStorage));
};