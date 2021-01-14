import { deauthorization } from '../auth';

const logoutBtn = document.getElementById('logoutBtn');

export const logout = () => {
  logoutBtn.onclick = () => {
    deauthorization();
  };
};