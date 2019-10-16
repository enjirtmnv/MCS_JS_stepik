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







