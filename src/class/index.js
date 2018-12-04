/* class Decleration using ES6 */
class UserDetails {

    constructor(name = "Enter Name", email = "Enter Email") {
        this.displayuser = () => {
            return this.name + ' - ' + this.email + ' - ' + _user_name;
        };

        /* constructor is used to initialise the variable that be used with in (inside) the class */
        this.name = name;
        this.email = email;
    }

    /* get will not have any formal parametter */
    get UserDetails() {
        return {
            name: this.name,
            email: this.email
        };
    }

    /* setters access only one formal parameter as the input */
    set UserDetails(userdetails) {
        this.name = userdetails.name;
        this.email = userdetails.email;
    }

}

let _user_detais = new UserDetails('dhileep', 'dhileepkumarit@gmail.com');
console.log('UserDetails', _user_detais.displayuser());
/* class */