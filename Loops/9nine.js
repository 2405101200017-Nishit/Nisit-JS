// reduce

 const array1 = [1, 2, 3, 4]

 const initialValue = 0

 const sumOfValues = array1.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
 })

// console.log(sumOfValues);
 
// Another Way ******

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce( (accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    
    return accumulator + currentValue
   
}, 0)

// console.log(myTotal);

// another way ***************

const newNums = [1, 2, 3, 4, 5]

const sumNewNums = newNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(sumNewNums);


// EXAMPLE SHOPPING CART

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 3999
    },
    {
        itemName: "Java Course",
        price: 4999
    },
    {
        itemName: "Data Science Course",
        price: 5999
    },

]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);

