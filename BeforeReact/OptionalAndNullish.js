// These two operators are very common in modern JavaScript:
// Optional chaining ?. → safely access something that might not exist.
// Nullish coalescing ?? → provide a fallback when a value is null or undefined.


// ? 

const user = {
    name: "Nisit"
};

console.log(user.address?.city);


//  ??

let username;

console.log(username ?? "Guest");
