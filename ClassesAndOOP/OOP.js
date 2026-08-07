  // Object Literal
//    const user = {
//        username: "Nishit",
//        loginCount: 8,
//        signedIn: true,

//        getUserDetails: function(){
//            //console.log('Got user details from database');
//            //console.log(`Username: ${this.username}`);
//            console.log(this);
        
        
        
//        }
//   }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)



function user(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn - isLoggedIn;

        this.greeting = function () {
            console.log(`Welcome ${this.username}`);

        };

        return this;

    }



const userOne = new user('Nishit', 12, true)
const userTwo = new user("Ritika",12, false )
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);





