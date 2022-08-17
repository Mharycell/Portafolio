

const botonMenu = document.querySelector('.btn');
const menu = document.querySelector('.header-nav_ul');

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('mostrar-menu');  
});
