import { createProduct } from '../products/createProduct';

const form = document.getElementById('form');

export const onsubmitProduct = () => {
  form.onsubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const naming = formData.get('naming');
    const price = formData.get('price');
    const memory = formData.get('memory');
    const color = formData.get('color');
    const processor = formData.get('processor');
    const graphics = formData.get('graphics');
    const brightness = formData.get('brightness');
    const contrast = formData.get('contrast');
    const matrix = formData.get('matrix');
    const cameras = formData.get('cameras');
  
    let product = {
      'name': naming,
      'category': 'phones',
      'price': price,
      'reviews': [],
      'characteristics': {
        'memory': memory,
        'colors': [
          color,
        ],
        'processor': processor,
        'graphics': graphics,
        'brightness': brightness,
        'contrast': contrast,
        'matrix': matrix,
        'cameras': cameras,
      },
    };
  
    createProduct(product);
  };
};