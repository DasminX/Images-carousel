"use strict";

const imgs = document.querySelector(".img-container");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const img = document.querySelectorAll("img");

let idx = 0;

let interval = setInterval(run, 2500);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) idx = 0;
  imgs.style.transform = `translateX(-${idx * 100}%)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

function goPrevImg() {
  idx--;
  if (idx < 0) idx = img.length - 1;
  changeImage();
  resetInterval();
}
function goNextImg() {
  idx++;
  if (idx > img.length - 1) idx = 0;
  changeImage();
  resetInterval();
}

leftBtn.addEventListener("click", goPrevImg);
rightBtn.addEventListener("click", goNextImg);
