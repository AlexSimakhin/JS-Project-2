import { deauthorization } from '../../../index/scripts/auth';

const logoutBtn = document.getElementById('logoutBtn');

export const logout = () => {
  logoutBtn.onclick = () => {
    deauthorization();
  };
};