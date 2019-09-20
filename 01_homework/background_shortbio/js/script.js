const bodyBackgound = prompt('What will be the background of the page?');
const textColor = prompt('What will be the color of the text on the page?');
const personInspiring = prompt('What is the name of the person who inspires you?');
const imageAddress = prompt('Enter image address?');
const textPage = prompt('Enter text page');


const body = document.querySelector('body');
body.style.backgroundColor = bodyBackgound;

const page = document.querySelector('.page');
page.style.color = textColor;

const span = document.querySelector('.name');
span.innerHTML = personInspiring;

const img = document.querySelector('img');
img.setAttribute('src', imageAddress);

const p = document.querySelector('.shortBio');
p.innerHTML = textPage;
p.className += ' animated';
