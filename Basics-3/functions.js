function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    
}

//sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
   
}

const result = addTwoNumbers(3, 5)

// console.log("Result : ", result)

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nishit"))
console.log(loginUserMessage())