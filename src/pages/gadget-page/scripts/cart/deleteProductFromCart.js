// deleteProductFromCart
export const deleteProductFromCart = (hash) => {
  let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
  let newCartArray = [];

  cartLocalStorage.map((value) => {
    if (value.hash !== hash) {
      newCartArray.push(value);
    }
  });

  localStorage.setItem('cart', JSON.stringify(newCartArray));
};