/* eslint-disable linebreak-style */
const revealMenu = document.querySelector('.hamburger-menu');
const hideMenu = document.querySelector('.nav-items'); // .hidden-content

revealMenu.addEventListener('click', () => {
  revealMenu.classList.toggle('active');
  hideMenu.classList.toggle('active');
});

document.querySelectorAll('.li-1').forEach((n) => n.addEventListener('click', () => {
  revealMenu.classList.remove('active');
  hideMenu.classList.remove('active');
}));
