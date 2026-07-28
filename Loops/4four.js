// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }



const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const programming = ["js","rb","py","java","cpp"]

for(const key in programming) {
    // console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN',"India")
// map.set('UK',"United Kingdom")
// map.set('FR',"France")

// for(const key in map){
//     console.log(key);
    
// } 
// map is not iterable

// for in loops for objects
// for of loops for arrays, many ways to iterate arrays