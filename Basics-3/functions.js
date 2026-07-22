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
//console.log(loginUserMessage())

function calculateCarPrice (...num1) {
return num1
}

// console.log(calculateCarPrice(200, 400, 500))

function calculateBatPrice (val1, val2, ...num1) {
return num1
}

// console.log(calculateBatPrice(200, 400, 500, 2000))

const user = {
    username: "Nishit",
    price: 199
}

function handleObject(anyobject) {
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
    
}
//handleObject(user)

handleObject ({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 900, 500, 1000]));

