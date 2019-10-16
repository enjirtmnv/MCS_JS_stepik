const form = document.querySelector('form');
const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';
const city = 'Miami';

/*

let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://bulk.openweathermap.org/sample/city.list.json.gz', false);
xhr.send();
console.log(JSON.parse(xhr.responseText));



 */



form.onsubmit = function (e) {
    e.preventDefault();



};









/*
const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';
const city = 'Miami';

//адрес, куда мы будем отправлять запрос
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

//новый запрос
let xhr = new XMLHttpRequest();

//настройка запроса 1) GET/POST 2)Address 3)false - синхронный запрос (не смогут происходить параллельные запросы на странице, пока этот не разрешится)
xhr.open('GET', url, false);

//после настройки запрос нужно отправить
xhr.send();



if (xhr.status != 200){
    //статус запроса

    console.log(xhr.status + ' ' + xhr.statusText);

    //Статус 200 OK, сервер готов передать ответ

} else {

    //получение ответа
    //передал ответ в виде строки в формате JSON
    let DATA = JSON.parse(xhr.responseText); //преобразование JSON строки в объект
    console.log(DATA);
    document.write(DATA.main.temp - 273)
    //передал ответ в виде строки в формате JSON
}


 */
let cityList = [
    {
        "id": 707860,
        "name": "Hurzuf",
        "country": "UA",
        "coord": {
            "lon": 34.283333,
            "lat": 44.549999
        }
    },
    {
        "id": 519188,
        "name": "Novinki",
        "country": "RU",
        "coord": {
            "lon": 37.666668,
            "lat": 55.683334
        }
    },
    {
        "id": 1283378,
        "name": "Gorkhā",
        "country": "NP",
        "coord": {
            "lon": 84.633331,
            "lat": 28
        }
    },
    {
        "id": 1270260,
        "name": "State of Haryāna",
        "country": "IN",
        "coord": {
            "lon": 76,
            "lat": 29
        }
    },
    {
        "id": 708546,
        "name": "Holubynka",
        "country": "UA",
        "coord": {
            "lon": 33.900002,
            "lat": 44.599998
        }
    },
    {
        "id": 1283710,
        "name": "Bāgmatī Zone",
        "country": "NP",
        "coord": {
            "lon": 85.416664,
            "lat": 28
        }
    },
    {
        "id": 529334,
        "name": "Mar’ina Roshcha",
        "country": "RU",
        "coord": {
            "lon": 37.611111,
            "lat": 55.796391
        }
    }]

let myArr = [];
for ( let i = 0; i < cityList.length; i++){
    myArr.push(cityList[i].name);
}
console.log(myArr.sort());

