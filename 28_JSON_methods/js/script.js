//в таком виде к нам приходят данные из API сервисов
const apiString = '[{"city" : "Moscow","temp" : 10,"pressure" : 250},{"city" : "Miami","temp" : 28,"pressure" : 200},{"city" : "Beijing","temp" : 15,"pressure" : 210}]';

//необходимо JSON строку преобразовать в объект, потому что к объектам мы можем обращаться по отдельности

const DATA = JSON.parse(apiString);

console.log(DATA);


//Создать API string, то есть строку, из JSON файла


const DATA2 = [
    {
        "city" : "Moscow",
        "temp" : 10,
        "pressure" : 250
    },
    {
        "city" : "Miami",
        "temp" : 28,
        "pressure" : 200
    },
    {
        "city" : "Beijing",
        "temp" : 15,
        "pressure" : 210}
    ];


const apiString2 = JSON.stringify(DATA2);
console.log(apiString2);



/*

Обмен данными в виде JSON объектов между сервером и страницей
Для того, чтобы поулчить данные с сервера используется XMLHttpRequest
Это функциия, которая существует внутри браузера
И она позволяет отправлять запросы на сервер и асинхронно
не перезагружая страницу получать данные

 */