const user = {
    username : "Nishit",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     username : "Chai"
//     console.log(this.username);
    
// }

// chai()

// 'this' keyword only works in objects
 
const addTwo = (num1, num2) => {
   return num1 + num2
    
}

console.log(addTwo(3, 4));  // Arrow function

const subTwo = (num1, num2) => num1 - num2

console.log(subTwo(4, 3)); // implicit return

const multiTwo = (num1, num2) => (num1 * num2)

console.log(multiTwo(3, 3)); // preferred way


const plusTwo = (num1, num2) => ({username : "Nishit"})

console.log(num1, num2);



