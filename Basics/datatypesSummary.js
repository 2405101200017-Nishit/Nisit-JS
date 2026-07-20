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
    name : "Nisit",
    age : 20
} // object

const myFunction = function(){
    console.log("Hello World");
} // object



//  *****

// Stack Memory (Primitive) and Heap Memory (Non-Primitive)


let myHomeName = "Gopal"

let anotherName = myHomeName

anotherName = "chai"

console.log(myHomeName)
console.log(anotherName)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "nisit@google.com"

console.log(userOne.email);
console.log(userTwo.email);



// Primitive Types:
// 1. Stored in Stack
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies, don't affect the original

// Reference Types

// 1. Stored in heap; accessed via references (Stored in stack).
// 2. Changing the value through another reference, affects the original
