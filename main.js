    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }
  
     const toggler = document.querySelector('.menu-toggle');
  const container = document.querySelector('.container');

  toggler.addEventListener('click', () => {
    container.classList.toggle('menu-open-margin');
 // o una clase que agregue más espacio
  });