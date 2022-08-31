// Create object using object literals
const player = {};
player.name = 'Small Nirob'; /* Object property */
player.speciality = 'Batsman'; /* Object property */
// console.log(player);

// Object Method
player.bat = function () {
    console.log('Swing your bat')
} 
console.log(player);
player.bat();


// We will use the following method most frequently
const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}



// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);

const atel = Object.create(student); /* এই Object এর parent Object হচ্ছে 16 নাম্বার লাইন এর Object */
// console.log(atel.name); /* Output: Pandey */



// 4. class
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);


// 5. Function
function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);