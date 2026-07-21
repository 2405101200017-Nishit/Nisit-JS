const Marvel = ["Thor", "Hulk", "Ironman"]

const DC = ["Superman", "Flash", "Batman"]

// Marvel.push(DC)

// console.log(Marvel);

// const allHeroes = Marvel.concat(DC)
// console.log(allHeroes);

const allNewHeroes = [...Marvel, ...DC]

// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6],7 , [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)

//console.log(realAnotherArray);


// console.log(Array.isArray("Nishit"));
// console.log(Array.from("Nishit"));

//console.log(Array.from({name: "Nishit"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));

 
