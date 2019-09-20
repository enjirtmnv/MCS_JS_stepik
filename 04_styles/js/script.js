const Colored = document.querySelector('.colored');
/*
так как мы выбираем элемент с помощью querySelector, то он выберет первый
элемент с классом .colored и вернет его html-код
 */
console.log(Colored);
console.log(Colored.style);

Colored.style.backgroundColor = 'lightblue';

const quest = prompt('What color do you want?');
Colored.style['background-color'] = quest;

