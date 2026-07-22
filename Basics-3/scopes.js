let a = 300

if (true) {
    let a = 10
  // const b = 20
    //console.log("INNER : ", a);

}

 // console.log(a);
// console.log(b);


function one() {
    const username = "Nishit"

    function two() {
        const website = "Instagram" 
        console.log(username)
    }
    // console.log(website);

    two()
    
}

 // one()

if (true) {
    const username = "Nishit"
    if (username === "Nishit") {
        const website = " Instagram"
        // console.log(username + website);
        
    }
}

// ++++ Interesting ++++

addOne(5)

function addOne(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5)