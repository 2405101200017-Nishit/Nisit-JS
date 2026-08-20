// The Destructuring syntax is a JavaScript syntax that makes it possible to
//  unpack values from array, or properties from objects, into distinct variables

const user = {
    firstname: "Nishit",
    lastname: "Kakkad",
    age: 20,
    profession: "Full Stack Dev"
}

const {firstname, lastname, age } = user

console.log(age)