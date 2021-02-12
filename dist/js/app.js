"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const header__burger = document.querySelector(".header__burger"),
    header__menu = document.querySelector(".menu--header"),
    back = document.querySelector("body"),
    header__list = document.querySelector(".menu__list")
 
//============ burger
header__burger.addEventListener("click", () => {
  header__burger.classList.toggle("active");
  header__menu.classList.toggle("active");
  back.classList.toggle('lock');
});
header__list.addEventListener("click", () => {
  back.classList.toggle('lock');
  header__menu.classList.toggle("active");
  header__burger.classList.toggle("active");
});


});
