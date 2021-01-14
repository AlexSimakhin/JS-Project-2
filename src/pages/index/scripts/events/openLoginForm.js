const loginBtn = document.getElementById('loginBtn');
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');

export const openLoginForm = () => {
  loginBtn.onclick = () => {
    overlay.classList.add('visible');
    loginForm.classList.add('popup-show');
  };
};