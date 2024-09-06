class User {
    ime: string;
    username: string;
    email: string;
    password: string;

    constructor(
        ime: string, 
        username: string, 
        email: string, 
        password: string,
    ) {
        this.ime = ime;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

export {User};