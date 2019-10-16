const form = document.querySelector('form');
const enter = document.querySelector('input');
const tempResult = document.querySelector('.tempResult');
const windResult = document.querySelector('.windResult');

const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';

form.onsubmit = function (e) {
     e.preventDefault();
    const city = enter.value;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
    let xhr = new XMLHttpRequest();
    console.log(url);
    xhr.open('GET', url, false);
    xhr.send();

    let DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    let tempDATA = DATA.main.temp - 273;
    let windDATA = DATA.wind.speed;

    tempResult.innerHTML = tempDATA;
    windResult.innerHTML =windDATA;


};