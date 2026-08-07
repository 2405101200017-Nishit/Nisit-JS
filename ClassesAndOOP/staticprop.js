class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`);
        
    }

    static createID(){
        return `123`
    }
}

const nishit = new user('nishit')
nishit.logMe()
// nishit.createID()
// console.log(nishit.createID());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", 'i@phone.com')
iphone.logMe()