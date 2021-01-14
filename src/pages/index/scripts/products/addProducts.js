const cards = document.getElementById('cards');

const generateProductCard = (obj) => `
  <a data-hash="${obj.hash}" href="gadget-page.html?${obj.hash}" class="item_card">
    <img src="img/item-image-02.png" class="card_cover" alt="Item image">

    <p class="item_category">${obj.category}</p>
    <p class="item_name">${obj.name}</p>
    <p class="item_price">${obj.price}$</p>

    <p class="item_comments"><span>${obj.reviews.length}</span>отзывов</p>
  </a>
`;

export const addProducts = (value) => {
  let list = '';

  for (const item of value.data) {
    list += generateProductCard(item);
  }

  if (cards !== null) {
    cards.insertAdjacentHTML('afterbegin', list);
  }
};