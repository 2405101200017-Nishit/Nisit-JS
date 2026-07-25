// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is the best number");
        
    }
   // console.log(element);
    
    
}

for (i = 0; i <= 10; i++ ) {
    //console.log(`outer loop: ${i}`);
    for(j = 0; j<= 10; j++){
        //console.log(`inner loop: ${j} and outer loop ${i} `);
    // console.log(i + '*' + j + '=' + i*j);
        
    }
    

}
const myArray = ["Flash", "Superman", "Batman"]
//console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}

// break and continue

for(i = 0; i <= 10; i++){

    if(i == 5){
        console.log('Detected 5');
        break
        
    }

    console.log(i);
    
}

for(i = 0; i <= 10; i++){

    if(i == 5){
        console.log('Detected 5');
        continue
        
    }

    console.log(i);
    
}
