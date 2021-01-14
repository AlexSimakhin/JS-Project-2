import { saveTokenToLocaleStorage, closePopUp } from '../index';
import { authReq } from './authReq';
import { authorization } from './authorization';

export const regReq = async (value) => {
  let response = await fetch('https://lab.lectrum.io/js2/api/zavidovo/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  let result = await response.json();

  let statusAuth;

  if (response.status === 200) {
    saveTokenToLocaleStorage(result.data);

    statusAuth = await authReq().then((status) => {
      if (status === 204) {
        authorization();
        closePopUp();
        return status;
      }
    });
  }

  return statusAuth;
};