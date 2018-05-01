for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

/**
 * REST operators
**/

function sum(message: string, ...numbers: number[]) {
    let total: number = 0;
    for (var i in numbers) {
        total += parseInt(i);
    }
    console.log(message + ': ' + total);
}
sum('sum', 1, 2, 3, 4, 5, 6);

/**
 * SPREAD operators
**/

var numbers = [1, 2, 3, 4, 56];
var newNumber = [0, 66, ...numbers];
console.log('spread', newNumber);

/**
 * FOR IN and FOR OF
**/

var colors = ['Red', 'Blue', 'Green'];
//for in 
for (let index in colors) {
    console.log('for in: ', colors[index]);
}

//for of
for (let color of colors) {
    console.log('for of: ', color);
}

/**
 * CLASS
**/

class User {
    private name: string = '';
    private age: number = 0;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        console.log(this.name, this.age);
    }
    static talk() {
        console.log('talk');
    }
    run() {
        console.log('RUN');
    }
}

let user = new User('Duc', 25);
User.talk();
user.run();
console.log('typeof class', typeof (User));
console.log('typeof class', typeof (user));

/**
 * Ke thua (inheritance)
**/

class Person {
    private id: number;
    constructor(id) {
        this.id = id;
    }

    getId() {
        console.log(this.id);
    }
}

class Employee extends Person {
    private age: number;
    constructor(id, age) {
        super(id);
        this.age = age;
    }

    getIdExtend() {
        console.log('getIdExtend', super.getId());
    }

    getAge() {
        console.log(this.age);
    }
}

var employee = new Employee(10, 25);
employee.getId();
employee.getIdExtend();
employee.getAge();