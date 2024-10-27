'use strict';


// const Person = function (name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;

//     // this.calcAge = function () {
//     //     return 2024 -  this.birthYear;
//     // }
//     // Never create any mehtod inside the construtor
// }

// Person.prototype.calcAge =  function () {
//     return 2024 - this.birthYear; 
// }

// const varinder = new Person("Varinder" , 2001);
// const komal = new Person("Komal" , 2003);
// const aman = new Person("Aman" , 2001);

// console.log(varinder.calcAge(), komal.calcAge(), aman.calcAge());


// // delegation 
// const person = {
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// };

// const alice = Object.create(person);
// alice.name = 'Alice';
// alice.greet(); // Outputs: Hello, my name is Alice.



///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD

*/
// const Car = function (name, speed) {
//     this.name = name;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     return `${this.name} going at ${this.speed += 10} Km/h`;
// }

// Car.prototype.brake = function () {
//     return `${this.name} going at ${this.speed -= 5} Km/h`;
// }

// const bmw = new Car("BMW", 100);
// const audi = new Car("Audi", 70);

// console.log("initial speed", bmw.speed)
// console.log("initial speed", audi.speed)

// console.log("accelerate speed", bmw.accelerate())
// console.log("accelerate speed", audi.accelerate())

// console.log("brake speed", bmw.brake())
// console.log("brake speed", audi.brake())

// console.log("last speed", bmw.speed)
// console.log("last speed", audi.speed)

// es6 classes

// class expression
// const PersonCl= class{

// }

// class declaration
// class PersonCl {
//     constructor(name, birthYear){
//         this.name = name;
//         this.birthYear = birthYear;
//     }

//     // methods will be added to .prototype property
//     calcAge () {
//         return 2024 - this.birthYear;
//     }

//     get age () {
//         return this.birthYear + 10
//     }

//     set age (year){
//         console.log("year", year);
        
//         this.birthYear = year;
//     } 

//     static getClass () {
//         return this;
//     }
// }

// const person1 = new PersonCl("Varinder", 2001);
// const person2 = {
//     name: "Komal",
//     birthYear: 2003
// }

// console.log(person1, person1.calcAge());
// console.log(person2, person1.calcAge.call(person2));


// console.log(person1.age)

// person1.age = 2002;

// console.log(person1.age)


// console.dir(PersonCl.getClass())



///////////////////////////////////////

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
    constructor(car, speed){
        this.car = car;
        this.speed = speed;
    }

    accelerate () {
       return `${this.car} going at ${this.speed += 10} Km/h`
    }

    brake () {
        return `${this.car} going at ${this.speed -= 10} Km/h`
     }

    get speedUS (){
        return this.speed/1.6;
    }

    set speedUS (speed){
        return this.speed = speed*1.6
    }
}

const ford = new CarCl("Ford", 150);

console.log(ford.accelerate());
console.log(ford.speedUS);
console.log(ford.brake())

ford.speedUS = 50; 

console.log(ford.accelerate());
console.log(ford.speedUS);
console.log(ford.brake())