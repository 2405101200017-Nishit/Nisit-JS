const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calss, cryptography, network
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


// another way


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'Nishit', email: "nisitkakkad@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// 


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Nishit", Password: "Ritika"})
        } else {
            reject("ERROR : Something went wrong")
        }
    },1000)
    
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(MyUsername){
    console.log(MyUsername);
    
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The Promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", Password: "123"})
        } else {
            reject("ERROR : JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log('error')
    }
    
}

consumePromiseFive()

// 

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E: ", error);
    
//    }
// }

// getAllUsers()

// I feel this is the simplest method
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log('error');
    
})