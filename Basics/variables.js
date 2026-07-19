const accountID = 144553
let accountEmail = "nisitkakkad@gmail.com" // modern method to declare variable.
var accountPassword = "12345"
accountCity = "Vadodara"

let accountState

accountState = "Maharashtra"

//accountID = 2 // changing value of const is not allowed.

accountEmail = "nk@google.com"
accountPassword = "232323"
accountCity = "Mumbai"

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var
// because of issue in block scope and functional scope