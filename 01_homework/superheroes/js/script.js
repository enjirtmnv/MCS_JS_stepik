//Получение JSON из github
//Чтобы получить JSON, мы будем использовать API, называемый XMLHttpRequest
let requestURL = 'https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/json/superheroes.json';

//Чтобы создать запрос, нам нужно создать новый экземпляр объекта запроса из конструктора XMLHttpRequest, используя ключевое слово new
let request = new XMLHttpRequest();

//Теперь нам нужно открыть новый запрос, используя метод open()
//Два параметра являются обязательными, но есть и другие. Для простого примера хватит двух
//С помощью GET мы извлекаем данные
// URL-адрес для запроса - это URL-адрес файла JSON, который мы сохранили ранее
request.open('GET', requestURL);

//Затем мы отправляем запрос методом send()
request.send();

//Обращеаемся к функции
//JSON.parse() преобразовывает JSON строки в объект JS
request.onload = function () {
    let superHeroes = JSON.parse(request.response);
    console.log(superHeroes);
};
