class Customer {
    constructor(name){
        this.name = name;
    }
    sayBought(){
        return this.name + ', Bought'
    }
}

const customer = new Customer('Michael');
console.log(customer);
console.log(customer.sayBought());

class childCustomer extends Customer{
    getPresent(){
        return this.name + ', Gift abll'
    }
}

const customer2 = new childCustomer('Alisa');
console.log(customer2);
console.log(customer2.sayBought());
console.log(customer2.getPresent());




