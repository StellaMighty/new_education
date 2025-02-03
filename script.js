const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

// When the collapse is shown, add the "open" class to the toggler button
navbarCollapse.addEventListener('show.bs.collapse', function () {
  navbarToggler.classList.add('open');
});

// When the collapse is hidden, remove the "open" class
navbarCollapse.addEventListener('hide.bs.collapse', function () {
  navbarToggler.classList.remove('open');
})