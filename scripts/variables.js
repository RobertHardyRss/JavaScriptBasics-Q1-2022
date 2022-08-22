//@ts-check
// Anything I type here is a comment - single line

/*
Anything between the opening and closing
are comments and will
be
ignored by the compiler
*/

// declare variable age and assign it the value 51
let age = 51;
let gpa = 3.50397830948029809280928098;

let someValue = gpa / age;

const myName = "Peter Pham";
// This line will cause an error if uncommented
//myName = 42;

// boolean are only true or false
let isThisClassAwesome = true;

console.log(myName);

// define an object called car
let car = {
	year: 2006,
	make: "Toyota",
	model: "Highlander",
	isClean: false,
};

car.year = 2001;
car.color = "Black";
console.log(car);

// declare an array of fruits
let fruits = ["apple", "pear", "grapes", "banana"];

console.log(fruits[2]);
