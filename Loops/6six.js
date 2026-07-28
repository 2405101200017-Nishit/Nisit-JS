// const coding = ['js','py','java','c++']

// coding.forEach( (item) => {
//     console.log(item);
    
// })
// for each loops do not return any values, if you store it in a variable then it will not return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)


const newNums = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})
// console.log(newNums);