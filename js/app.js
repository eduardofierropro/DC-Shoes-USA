'use strict';
var body = document.body;
var med = document.querySelector('.header__med');
var medTop = med.getBoundingClientRect().top;

window.addEventListener('scroll', function () {
    var pixel = window.scrollY;
    if (pixel >= medTop) {
        body.classList.add('fixed');
    }
    else {
        body.classList.remove('fixed');
    }
});
var button = document.querySelector('.footer__button');
var sup = document.querySelector('.footer__sup');
button.addEventListener('click', function () {
    sup.classList.toggle('activo');
    button.classList.toggle('activo');
});
var dl = document.querySelectorAll('.submenu__dl');
var dt = document.querySelectorAll('.submenu__dt');
dt.forEach(function (x, i) {
    dt[i].addEventListener('click', function () {
        dl[i].classList.toggle('activo');
    });
});
