
let _user_name  ="dhileep"
/* 
    class deleared using 
    class Decleration method available in ES6 

*/
class UserDetails  {
    constructor(name="Enter Name", email="Enter Email", usertype){
        /* constructor is used to initialise the variable that be used with in (inside) the class */
        this.name = name;
        this.email = email;
        this.usertype = usertype;
    }

    /* method */
    displayuser = () => {
        return this.name + ' - '+this.email + ' - ' + _user_name
    }

    /* get will not have any formal parametter */
    get UserDetails(){
        return `User Details Name : ${this.name}, Email :  ${this.email}`
    }

    get UserName(){
        return `User Details Name : ${this.name}, Email :  ${this.email}`
    }

    /* setters access only one formal parameter as the input */
    set UserDetails(userdetails){
        this.name = userdetails.name;
        this.email = userdetails.email;
    }

    /* 
        This is the static method inside UserDetails Function 
        This function cannot be called by Instance
        This method will be called with reference to the class name
    */
    static UserAllDetails(){
        return this.name + ' - '+this.email + ' - ' + _user_name
    }

}


class UserAddress extends UserDetails {
    constructor(name,email,address_1="Enter Address 1", address2="Enter Address 2", city="Enter City", state="Enter State"){
        super(name,email,'User');
        this.address_1 = address_1;
        this.address_2 = address2;
        this.city = city;
        this.state = state;
    }

    get userAddress(){
        return `User Address is ${this.address_1}, ${this.address_2}, ${this.city}, ${this.state}`;
    }

    get useDetails(){
        return super.UserDetails
    }

    set userAddress(_get_address){
        this.address_1 = _get_address.address_1;
        this.address_2 = _get_address.address_2;
        this.city = _get_address.city;
        this.state = _get_address.state;
    }


} 

/* class Decleared using 
   class expression method in Es6 */
var _UserDesignation =  class UserDesignation{}

/* Declearing Static Property for the class */
UserAddress.designation  = "Full Stack Developer";
UserAddress.getDesignation = () =>{
    return this.designation;
}

console.log('_UserDesignation',new _UserDesignation)




let _user_detais = new UserDetails('dhileep','dhileepkumarit@gmail.com','User');
let _user_address = new UserAddress('dhileep','dhileepkumarit@gmail.com');
console.log('UserDetails', UserDetails.UserAllDetails())
console.log('UserDetails', _user_detais)
console.log('UserDetails Address', _user_detais.address_1)

console.log('UserAddress', _user_address.designation)

console.log('UserAddress UserAddress', UserAddress.designation)
console.log('UserAddress', _user_address.useDetails)
console.log('UserAddress', _user_address.userAddress)

/* class */
