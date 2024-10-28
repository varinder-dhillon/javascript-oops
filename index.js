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

// class CarCl {
//     constructor(car, speed){
//         this.car = car;
//         this.speed = speed;
//     }

//     accelerate () {
//        return `${this.car} going at ${this.speed += 10} Km/h`
//     }

//     brake () {
//         return `${this.car} going at ${this.speed -= 10} Km/h`
//      }

//     get speedUS (){
//         return this.speed/1.6;
//     }

//     set speedUS (speed){
//         return this.speed = speed*1.6
//     }
// }

// const ford = new CarCl("Ford", 150);

// console.log(ford.accelerate());
// console.log(ford.speedUS);
// console.log(ford.brake())

// ford.speedUS = 50; 

// console.log(ford.accelerate());
// console.log(ford.speedUS);
// console.log(ford.brake())

//Inheritance between constructor functions

// const Person = function (firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function(){
//     return 2024-this.birthYear;
// }

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.name} and I study ${this.course}`);
// }


// const shubham = new Person("Shubham", 2008);
// const komal = new Student("Komal", 2003,  'Web Designing');

// console.log(shubham.calcAge());
// console.log(komal);


///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (name, speed) {
//     this.name = name;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     return `${this.name} going at ${this.speed += 10} Km/h`;
// }

// Car.prototype.brake = function () {
//     console.log(`${this.name} going at ${this.speed -= 5} Km/h`);
// }

// const CarEV = function (name, speed, charge) {
//     Car.call(this, name, speed); // Call the parent constructor
//     this.charge = charge;
// }
// // Inherit from Car
// CarEV.prototype = Object.create(Car.prototype);

// // Reset the constructor
// CarEV.prototype.constructor = CarEV;

// // Add a method to CarEV
// CarEV.prototype.chargeBattery =  function(charge){
//     this.charge = charge;
// }

// // overwrite a method method of parent constructor (Polymorphism)
// CarEV.prototype.accelerate = function () {
//     console.log(`${this.name} going at ${this.speed += 20} Km/h, with a charge of ${this.charge-=1}%`);
// }

// const tesla = new CarEV("Tesla", 150, 80);
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();


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

// class StudentCl extends PersonCl {
//     constructor(name, birthYear, course){
//         super(name, birthYear) // refering the properties to parent class constructor
//         this.course = course;
//     }


//     get age (){
//         return this.birthYear + 20
//     }

// }

// const binni = new StudentCl("Binni", 2001, "Web developer");

// console.log(binni, binni.age)


// Inheritance between Classes : Object.create();

// const PersonProto = {
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function () {
//     console.log(this.firstName, this.course)
// }

// const binni = Object.create(StudentProto);
// binni.init("Binni", 2001, "BCA")
// binni.introduce()


// Class encapsulation Practice

// 1 -> Public fields -> these fields are living in the instance not in the prototype
// 2 -> Private fields
// 3 -> Public fields
// 4 -> Private fields

class Account {
    // 1 -> Public fields 
    locale = navigator.language;

    // 2 -> Private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
    }

    // 3 -> Public methods
    deposit(val){
        this.#movements.push(val)
    }

    withdraw(val){
        this.deposit(-val);
    }

    
    requestLoan (val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log("Loan is approved!");
        }
    }

    // 4 -> Private Methods
    #approveLoan(val){
        if(val){
            return true;
        }
    }
}


const acc1 = new Account("Varinder", "EUR", 2585);
acc1.deposit(500);
acc1.withdraw(50);

acc1.requestLoan(500);
console.log(acc1)