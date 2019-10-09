//Выбор по классу
//const cools = document.getElementsByClassName('cool');

//Выбор по тэгу
//const cools = document.getElementsByTagName('div');

//Выбор по селектору
const cools = document.querySelectorAll('.cool');
console.log(cools[0]);

cools[0].innerHTML = "i'm cool";

