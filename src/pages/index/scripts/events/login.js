import { loginReq } from '../auth';
import { getProducts } from '../products/getProducts';

const loginPane = document.getElementById('loginPane');

export const login = (availability) => {
  loginPane.onsubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
  
    const login = {
      'email': email,
      'password': password,
    };
  
    loginReq(login).then((status) => {
      if (status === 204) {
        if (availability['product-access']) {
          getProducts();
        }
      }
    });
  };
};