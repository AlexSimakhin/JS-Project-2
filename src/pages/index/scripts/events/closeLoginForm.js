const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');
const closeImg = loginForm.querySelector('img');

export const closeLoginForm = () => {
  closeImg.onclick = () => {
    overlay.classList.remove('visible');
    loginForm.classList.remove('popup-show');
  };
};