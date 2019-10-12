const buttons = document.querySelectorAll('button');

//for of loop

let i = 1;
for(button of buttons){
    button.style.backgroundColor = '#' + (902558+i*400) ;
    i++;
}



//for in loop

/*
let i = 1;
for(index in buttons) { //key == index
    buttons[index].style.backgroundColor = '#' + (992558+i*400) ;
    i++;
}
*/

let person = {
    name: 'Sindey',
    surname: 'Disnay',
    macnineLearning: 'true'
};

for (key in person) {
    console.log(person[key]);
    console.log(key);
}