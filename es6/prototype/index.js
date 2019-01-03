/* function proto  --> new constructor method */
var _empty_function = () => {};
function UserDetails_new(){
    this.username = "dhileeplkumar";
}

UserDetails_new.prototype = {
    designation: "web designer"
}



let _new_user_details =  new UserDetails_new();

function AddressDetails_new(){
    this.address1 = "Address 1";
}

AddressDetails_new.designation = _new_user_details.designation;

var zipcodedetails_new = new AddressDetails_new;
zipcodedetails_new.zipcode = "642202";
UserDetails_new.prototype = zipcodedetails_new;
_new_user_details =  new UserDetails_new();

let _new_user_address =  new AddressDetails_new();

console.log('_new_user_details', _new_user_details);
console.log('_new_user_address', _new_user_address);
console.log('_empty_function', _empty_function);
console.log('zipcodedetails_new', zipcodedetails_new);
console.log('_new_user_details', _new_user_details);