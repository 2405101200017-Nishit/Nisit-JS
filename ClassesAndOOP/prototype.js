let myName = "Nishit     "
let myDrink = "Chai     "

// console.log(myName.trueLength);


let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    Thot : 'Hammer',
    Spiderman : 'Web',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
        
    }
}

Object.prototype.Nishit = function(){
    console.log(` Nishit is present in all objects`);
    
}

Array.prototype.HeyNishit = function(){
    console.log("Nishit says Hello");
    
}
myHeroes.Nishit()
myHeroes.HeyNishit()
// heroPower.HeyNishit()

// inheritance

const user = {
    name: "chai",
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    //console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`)
    
}

anotherUsername.trueLength()
'Nishit'.trueLength()
'IcedTea'.trueLength()