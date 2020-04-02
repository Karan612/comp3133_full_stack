class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    details() {
        return `Model: ${this.name} Engine ${this.year}`;
    }

}

class Sedan extends Car {
    constructor(name, year, balance){
        super(name, year);
        this.balance = balance;
    }

    info() {
        return `${this.name} has a balance of $${this.balance}.00`;
    }
}

const car2 = new Car('Pontiac Firebird', 1969);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());