class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHi() {
        return 'Hello, ' + this.name;
    }
}

class Female extends User{
    sayHi() {
        return 'Hello madam, ' + this.name;
    }
}

const Man = new User('someone', '123@mail.ru', 'qwerty');
console.log(Man);
console.log(Man.sayHi());

const Avrora = new Female('Avrora', 'avav@ya.ru', '123456');
console.log(Avrora);
console.log(Avrora.sayHi());