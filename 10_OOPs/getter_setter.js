class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return `${this._email.toUpperCase()}`;
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}anjani`;
    }
    set password(value){
        this._password = value;
    }
}

const anjani = new User("a@anjani.ai", "abc")
console.log(anjani.password)
console.log(anjani.email)