let num = window.prompt('Enter number');
function modulSquare(num) {
    return Math.abs((num)**(Math.floor((Math.random()*(10-1)+1))))
}

console.log(modulSquare(num));
