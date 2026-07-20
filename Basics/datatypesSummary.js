// Primitive Data Types 

// 7 Types : Strings, Numbers, Booleans, null, undefined, Symbol and BigInt

const id = Symbol('123')
const anotherID = Symbol('123') // Symbol returns a unique Symbol value

console.log(id == anotherID) // That's why False

const bigNumber = 1234567890123456789n // bigInt

// Reference (Non-Primitive) Data Types

// Array, Objects, Functions

const colors = ["Red", "Green", "Blue"] // Array

const myObj = {
    name = "Nisit",
    age = 20
} // object

const myFunction = function(){
    console.log("Hello World");
} // object