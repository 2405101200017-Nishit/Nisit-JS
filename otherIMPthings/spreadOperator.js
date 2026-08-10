// ... is spread operator
// used when you want to make a copy of some object and dont want the main object to change


// Example 
// Make a object named Student and put values such as name, contact, address and rollNo inside that obj
// then make a copy of the obj Student, it should not change the value of the main student object
const Student = {
    name: "Nishit",
    contact: "nisitkakkad@gmail.com",
    address: "4th Floor, The Shivalika Palace",
    rollNo: 123
}

const studentCopy = {...Student}

studentCopy.name = "Rahul"
studentCopy.contact = "Rahul@example.com"
studentCopy.address = "Vadodara"
studentCopy.rollNo = 456

console.log(studentCopy);
console.log(Student);

