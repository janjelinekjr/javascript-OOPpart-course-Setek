// var Car = function(wheels, color, brand, tank, distance) {
//     this.wheels = wheels;
//     this.color = color;
//     this.brand = brand;
//     this.tank = tank;
//     this.distance = distance;
//     this.calculateDistance = function() {
//         return this.tank * this.distance;
//     };
// }

// Car.prototype.type = "řízeno lidmi";

// var car1 = new Car(4, "red", "toyota", 40, 6);
// var car2 = new Car(4, "blue", "hyundai", 30, 5);
// var car3 = new Car(4, "green", "skoda", 35, 5);

// // console.log(car1.wheels);
// // console.log(car2.color);
// // console.log(car3.brand);

// // console.log(car1.type);0
// // console.log(car3.calculateDistance());

// console.log(car1);
// console.log(car1.hasOwnProperty("wheels"));


// Jiná možnost tvorby objektů:

// var personScheme = {
//     ageCalculator: function(){
//         console.log(2022 - this.yearBirth);
//     }
// };

// var david = Object.create(personScheme);
// david.name = "David";
// david.yearBirth = 2008;
// david.job = "hacker";

// var anna = Object.create(personScheme,{
//     name: {value: "Anna"},
//     yearBirth: {value: 2000},
//     job: {value: "NIL"}
// });

// console.log(david.name);
// david.ageCalculator();
// console.log(anna.name);
// anna.ageCalculator();

// IIFE funkce:
//běžná funkce ex.:
// function hra() {
//     var score = Math.random() * 10;
//     console.log(score);
// }
// //nutno volat pro spuštění:
// hra();

//IIFE ex.:
// (function hra2() {
//     var score = Math.random() * 10;
//     console.log(score);
// })();
//netní potřeba volat a spustí se automaticky při načtení stránky

//IIFE s parametrem:
// (function hra2(jmeno) {
// var score = Math.random() * 10;
// console.log(jmeno + " vaše skoré je: " + score);
// })("Anna");

// Lexical scoping:
