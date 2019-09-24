const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if (player == computer) {
    console.log('draw')
} else if (computer == 0 && player == 1 || computer == 1 && player == 2 || computer == 2 && player == 0) {
    console.log('computer win')
} else if (computer == 0 && player == 2 || computer ==1 && player == 0 || computer == 2 && player == 1) {
    console.log('player win')
} else {
    console.log('error')
}

/*
if (player == computer) {
    console.log('draw')
} else if (computer == 0 && player == 1) {
    console.log('computer win')
} else if (computer == 0 && player == 2) {
    console.log('player win')
} else if (computer ==1 && player == 0) {
    console.log('player win')
} else if (computer == 1 && player == 2) {
    console.log('computer win')
} else if (computer == 2 && player == 0) {
    console.log('computer win')
} else if (computer == 2 && player == 1) {
    console.log('player win')
} else {
    console.log('error')
}
*/

if (computer == 0) {
    console.log('cumputer - rock')
} else if (computer == 1) {
    console.log('computer - scissors')
} else if (computer == 2) {
    console.log('computer - paper')
} else {
    console.log('computer - error')
}

if (player == 0) {
    console.log('player - rock')
} else if (player == 1) {
    console.log('player - scissors')
} else if (player == 2) {
    console.log('player - paper')
} else {
    console.log('player - error')
}


