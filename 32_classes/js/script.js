let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi: function () {
        return 'Hello'
    }
};

//Создадим конструктор, который генерирует экземпляр в виде пользователя
function User(name, email, password) {
    //конструктор, который будет определять по каким правилам будет создаваться новый пользователь
    this.name = name; //каждый экземпляр при создании будет получать имя равное введенному при объявлении
    this.email = email; //получать емейл, который он ввел
    this.password = password; //получать паролль, который он ввел
    this.__proto__= Users; //все User наследуют свойства и методы от глобального конструктора Users
}

//Создадим экземпляр
//все экземпляры создаются с помощью слова new

const Fedya =  new User('Fedya', 'fedyakon@mail.ru', 'qwerty123');
console.log(Fedya);
console.log(Fedya.sayHi());

//Нужно разделить пользовтелей на User и FUser
function FUser(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__= Users;
    this.sayHi = function () { return 'Hello, madam ' + this.name + ', are you registered'
    }
}

const Alla  = new FUser('Alla', 'allo4ka@gmail.com', 'pushok45');
console.log(Alla);
console.log(Alla.sayHi());

//Таким образом, мы можем создавать классы в виде функциий, чтобы генерировать экземпляры наших объектов