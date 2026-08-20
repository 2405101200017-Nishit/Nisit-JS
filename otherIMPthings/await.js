// const studentPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve({
//             name: "Nisit",
//             age: 20
//         });
//     }, 2000);

// });

// async function getStudent() {

//     try {
//         const student = await studentPromise;

//         console.log(student);

//     } catch (error) {
//         console.log(error);
//     }
// }

// getStudent();



const Log = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve({
            name: 'nishit'
            
        })
        console.log("Hello")
        
    },1000)
    
})

async function getLog(){
    try {
        const greeting = await Log
        console.log(greeting);
        


        
    }
    catch (error){
        console.log(error);
        
    }
    
}

getLog()