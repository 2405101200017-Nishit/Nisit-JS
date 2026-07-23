// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
    
}) ();

( (name) => {
    // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
}) ('Nishit');
