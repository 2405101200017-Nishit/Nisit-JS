// if

// if (condition){}

// if(true){}

// if(false){}

const temperature = 41

// if(temperature < 50){
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
    
// }

// // <; >, <=, ==, ===, !=

 const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`Player power: ${power}`);
    
// }

const balance = 1000

// if (balance > 500) console.log("More than 500") 
// this is shorthand method, adviced not to use for code readability purposes

// Nested

// const points = 1000

// if (points < 500) {
//     console.log("less than 500");
    
// } else if (points < 750) {
//     console.log("less than 750");
    
// } else if (points < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const loggedInFromGoogle = false
const loggedInFromApple = true

if (loggedInFromGoogle || loggedInFromApple){
    console.log("The user is logged in");
    
}

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("User is allowed to buy courses");
    
}


// Nullish Coalescing Operator (??)

 let val1
 // val1 = 5 ?? 10
 // val1 = null ?? 10
 // val1 = undefined ?? 15
 // val1 = null ?? 10 ?? 20




 console.log(val1);

 // Terniary Operator

 // condition ? true : false

 iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 

 




