document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
    })
  );
});


// window.addEventListener('resize', function() {
//   const advantagesList = document.querySelector('.advantages__list');

//   if (advantagesList) { 
//     if (window.innerWidth >= 1200) {
//       advantagesList.classList.remove('advantages__list'); 
//     } else {
//       advantagesList.classList.add('advantages__list'); 
//     }
//   }
// });

// window.dispatchEvent(new Event('resize'));

function updateAdvantagesListClass() {
  const advantagesList = document.querySelector('.advantages__list');

  if (advantagesList) {
    if (window.innerWidth >= 1200) {
      advantagesList.classList.remove('advantages__list'); // 
    } else {
      if (!advantagesList.classList.contains('advantages__list')) {
        advantagesList.classList.add('advantages__list'); 
      }
    }
  }
}

updateAdvantagesListClass();

window.addEventListener('resize', updateAdvantagesListClass);



