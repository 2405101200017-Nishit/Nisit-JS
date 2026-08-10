// The spread operator can copy all entries of an array or object
//  without modifying the main object or array

// with Array

const array = ['A', 'B']

const newArray = [...array, 'C', 'D', 'E']

console.log(array);
console.log(newArray);


// with Object

const Student = {
    name: "Nishit",
    contact: "nisitkakkad@gmail.com",
    address: "4th Floor, The Shivalika Palace",
    rollNo: 123
}

const studentCopy = {...Student,
    name: 'Rahul',
    contact: 'rahul@example.com',
    address: 'Vadodara',
    rollNo: 456 }

    console.log(Student);
    console.log(studentCopy);
    
    
