//Создадим наследуюмую конструкцию

//Прототип всех зверей
let Animal = {
    canEat: true,
    hasParents: true,
};


//Создадим более низкую систематическую единицу
let Cow = {
    givesMilk: true,
    __proto__: Animal
};

console.log(Cow.givesMilk);
console.log(Cow.canEat); //Она наследует свойства и методы своего прототипа Animal

//Если вывести все ключи объекта Cow, он выдаст все ключи, в том числе и прототипа
for (key in Cow){
    console.log(key);
}