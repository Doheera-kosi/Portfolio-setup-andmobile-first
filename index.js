/* eslint-disable linebreak-style */
const revealMenu = document.querySelector('.menu');
const hideMenu = document.querySelector('.hidden-content');

function showMenu() {
  if (hideMenu.classList.contains('menu')) {
    hideMenu.classList.remove('menu');
  } else {
    hideMenu.classList.add('menu');
  }
}

revealMenu.addEventListener('click', showMenu);

// const menuItem = document.querySelector('.nav-c');
// const closeMobileItems = document.querySelectorAll('.closeMenu');
// const displayMobileMenu = () => {
//   menuItem.style.display = 'block';
// };
// const closeMobileMenu = () => {
//   menuItem.style.display = 'none';
// };
// document.querySelector('.menu').addEventListener('click', displayMobileMenu);
// closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));
