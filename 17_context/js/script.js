console.log(this);

window.onscroll = function () {
    console.log(this)
};

const button = document.querySelector('button');
button.onclick = function () {
    this.innerHTML = 'HELLO';
    console.log(this);
};



/*
const button = document.querySelector('button');
button.onclick = () => {
    this.innerHTML = 'HELLO'
    console.log(this);
};

//нельзя использовать стрелочную функцию для работы с КОНТЕКСТОМ
//контекст стрелочной функции всегда глобальный - window, независимо с каким объектом мы работаем
//используя стрелочную функциию не получится обратиться к кнопке и поменять содержимое на HELLO

 */
