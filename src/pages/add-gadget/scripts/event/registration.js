import { regReq } from '../../../index/scripts/auth';
import { getProducts } from '../../../index/scripts/products/getProducts';

const regPane = document.getElementById('regPane');

export const registration = (availability) => {
  regPane.onsubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
  
    const registration = {
      'email': email,
      'name': name,
      'password': password,
    };
  
    regReq(registration).then((status) => {
      if (status === 204) {
        if (availability['product-access']) {
          getProducts();
        }
      }
    });
  };
};