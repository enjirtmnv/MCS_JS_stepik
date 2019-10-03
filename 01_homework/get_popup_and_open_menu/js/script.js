const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');
/*
button.addEventListener('click', function () {
    popup.style.display = 'flex'
});

 */

//При использовании события указываем в скобках через запятую после addEventListener имя события и функцию

button.onclick = function () {
    popup.style.display = 'flex'
};

//При использовании упрощенной версии события добавляем к событию приставку on и через равенство пишем функцию

closePopup.onclick = function () {
    popup.style.display = 'none'
};

openMenu.onclick = function () {
    menu.style.left = '0'
};

closeMenu.onclick = function () {
    menu.style.left = '-50vw'
};


const main = document.querySelector('.content');
const footer = document.querySelector('.footer');

main.onclick = function () {
    menu.style.left = '-50vw'
};
footer.onclick = function () {
    menu.style.left = '-50vw'
};
console.log(window.innerWidth);
