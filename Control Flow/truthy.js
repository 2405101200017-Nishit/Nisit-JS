const userArray = []

if(userArray){
    console.log("Got user array.");
    
} else {
    console.log("Haven't got user array.");
    
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0, 'false", " ", [], {}, function(){}
// Rest are truthy

if(userArray.length === 0) {
    console.log("Array is empty");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}