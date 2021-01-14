const productContainer = document.querySelector('.product-info_section.container');
const name = productContainer.querySelector('#name');
const itemColorValue = productContainer.querySelector('#item-color-value');
const itemValue = document.getElementById('item-value');
const price = productContainer.querySelector('#price');
const userReviews = document.getElementById('userReviews');

const memory = document.getElementById('memory');
const color = document.getElementById('color');
const processor = document.getElementById('processor');
const graphics = document.getElementById('graphics');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const matrix = document.getElementById('matrix');
const cameras = document.getElementById('cameras');

const numbeOfReviews = document.getElementById('numbeOfReviews');

let colors = {
  'Черный': '#3A3A3A',
  'Чёрный': '#3A3A3A',
};

const generateColorValue = (color) => `
  <div class="circle">
    <div class="color" style="background-color: ${colors[color]};"></div>
  </div>
`;

const generateMemoryValue = (value) => `
  <div class="param">
    <p>${value} GB</p>
  </div>
`;

export const generateComment = (obj) => `
  <article>
    <p class="name">${obj.name}<img data-hash="${obj.hash}" src="img/icon/close-red.svg" class="close-icon" alt="Close icon"></p>
    <div class="feedback_info pros">
      <p class="feedback_title">Преимущества</p>
      <p class="feedback_content">${obj.pros}</p>
    </div>
    <div class="feedback_info cons">
      <p class="feedback_title">Недостатки</p>
      <p class="feedback_content">${obj.cons}</p>
    </div>
  </article>
`;

export const addProduct = (obj) => {
  name.innerHTML = obj.name;
  price.innerHTML = `${obj.price} $`;

  memory.innerHTML = `${obj.characteristics.memory} GB`;
  processor.innerHTML = obj.characteristics.processor;
  graphics.innerHTML = obj.characteristics.graphics;
  brightness.innerHTML = `${obj.characteristics.brightness} kd/м²`;
  contrast.innerHTML = obj.characteristics.contrast;
  matrix.innerHTML = `${obj.characteristics.matrix} Mp`;
  cameras.innerHTML = obj.characteristics.cameras;

  numbeOfReviews.firstChild.innerHTML = obj.reviews.length;

  let listColorValue = '';
  let listMemoryValue = '';
  let listComments = '';

  for (const item of obj.characteristics.colors) {
    listColorValue += generateColorValue(item);
    if (color.innerHTML === '') {
      color.innerHTML = obj.characteristics.colors;
    } else {
      color.innerHTML += `, ${obj.characteristics.colors}`;
    }
  }

  for (const item of obj.reviews) {
    listComments += generateComment(item);
  }
  
  listMemoryValue += generateMemoryValue(obj.characteristics.memory);
  
  if (itemColorValue !== null) {
    itemColorValue.insertAdjacentHTML('afterbegin', listColorValue);
    itemColorValue.querySelector('.circle').classList.add('selected');
  }
  if (itemValue !== null) {
    itemValue.insertAdjacentHTML('afterbegin', listMemoryValue);
    itemValue.querySelector('.param').classList.add('selected');
  }

  if (userReviews !== null) {
    userReviews.innerHTML = null;
    userReviews.insertAdjacentHTML('afterbegin', listComments);
  }
};