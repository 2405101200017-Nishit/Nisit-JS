class user {
    constructor (email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}Nishit`
    }
    set password(value){
        this._password = value
    }
}
const nishit = new user('nisit@gmail.com','ritika')
console.log(nishit.email);

console.log(nishit.password);
