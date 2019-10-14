//в такои виде к нам приходят данные из API сервисов
const apiString = '[{"city" : "Moscow","temp" : 10,"pressure" : 250},{"city" : "Miami","temp" : 28,"pressure" : 200},{"city" : "Beijing","temp" : 15,"pressure" : 210}]';

//необходимо преобразовать в объект, потому что к объектам мы можем обращаться по отдельности

const DATA = JSON.parse(apiString);