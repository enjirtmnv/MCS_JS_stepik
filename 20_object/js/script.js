let person = {
    name: 'Michelangelo',
    surname: 'Popov',
    age: 24,
    teacher: false,
    sayHello: function () { return 'Hello ' + this.name}
};

console.log(person.name);
console.log(person.sayHello());

person.CanCode = true;
console.log(person);

person.age = 18;
console.log(person);