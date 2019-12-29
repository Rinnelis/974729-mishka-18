var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var modalLink = document.querySelectorAll(".modal-open");
var modalForm = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < modalLink.length; i++) {
  modalLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalForm.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  })
}

overlay.addEventListener("click", function() {
  overlay.classList.remove("overlay--show");
  modalForm.classList.remove("modal--show");
});

svg4everybody();
