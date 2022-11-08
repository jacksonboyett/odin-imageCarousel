import './style.css';
import createSlider from './createSlider.js';

// Add buttons
const buttonOne = document.createElement('button');
buttonOne.textContent = '<';
buttonOne.classList.add('button1');
const buttonTwo = document.createElement('button');
buttonTwo.textContent = '>';
buttonTwo.classList.add('button2');

// Add nav circles
const navContainer = document.createElement('div');
const navOne = document.createElement('div');
const navTwo = document.createElement('div');
const navThree = document.createElement('div');
const navFour = document.createElement('div');
// Add classes to nav circles
navContainer.classList.add('navContainer');
navOne.classList.add('nav0');
navOne.classList.add('nav');
navTwo.classList.add('nav1');
navTwo.classList.add('nav');
navThree.classList.add('nav2');
navThree.classList.add('nav');
navFour.classList.add('nav3');
navFour.classList.add('nav');
// Append nav circles to container
navContainer.append(navOne);
navContainer.append(navTwo);
navContainer.append(navThree);
navContainer.append(navFour);
// Add event listeners to navs
navOne.addEventListener('click', chooseOne);
navTwo.addEventListener('click', chooseTwo);
navThree.addEventListener('click', chooseThree);
navFour.addEventListener('click', chooseFour);

// Append Elements
const body = document.querySelector('body');
const top = document.createElement('div');
top.classList.add('top');
top.append(buttonOne);
top.append(createSlider());
top.append(buttonTwo);
body.append(top);
body.append(navContainer);

// Place images on page
const navs = document.querySelectorAll('.nav');
const slides = document.querySelectorAll('.slide');
for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${i * 800}px)`;
}

// Add event listeners
buttonOne.addEventListener('click', imageBackwards);
buttonTwo.addEventListener('click', imageForward);

// Initialize counter
let counter = 0;
// Move image forwards
function imageForward() {
  counter += 1;
  if (counter === 4) {
    counter = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${(i - counter) * 800}px)`;
  }
  for (let k = 0; k < navs.length; k++) {
    console.log(navs[k]);
    navs[k].style.backgroundColor = 'transparent';
  }
  document.querySelector(`.nav${counter}`).style.backgroundColor = 'black';
}
// Move image forwards
function imageBackwards() {
  counter -= 1;
  if (counter === -1) {
    counter = 3;
  }
  console.log(`Counter: ${counter}`);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${(i - counter) * 800}px)`;
  }
  for (let k = 0; k < navs.length; k++) {
    console.log(navs[k]);
    navs[k].style.backgroundColor = 'transparent';
  }
  document.querySelector(`.nav${counter}`).style.backgroundColor = 'black';
}

// Nav functions
function chooseOne() {
  counter = -1;
  imageForward();
}
function chooseTwo() {
  counter = 0;
  imageForward();
}
function chooseThree() {
  counter = 1;
  imageForward();
}
function chooseFour() {
  counter = 2;
  imageForward();
}

// const interval = setInterval(function () {
//   imageForward();
// }, 5000);

document.querySelector('.nav').style.backgroundColor = 'black';
