const items = document.getElementsByTagName('li');
console.log(items);
let counter = 0; //счетчик

while (counter < items.length) { //пока индекс элемента меньше длины массива
    items[counter].innerHTML = counter + 1;
    counter++; //инкрементировать счетчик
}