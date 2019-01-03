/* protytpe inheritance using Object.create */
var _empty_function = () => {};

function UserDetails() {
    this.name = "Dhileep";
    this.email = "dhileeplkumarit@gmail.com";
}

/* assigning Prototype */

/* static object cannot be called  initiating with new */
UserDetails.name = "Dhileep";
UserDetails.email = "dhileeplkumarit@gmail.com";

/* assigning prototype using Object.create */
var _userdesignation = Object.create({
    designation: "Web Designer",
    experiance: {
        value: 4
    }
});

/* assigning var to a prototype */
console.log('_userdesignation.prototype', _userdesignation.__proto__);
UserDetails.prototype = _userdesignation.__proto__;

function UserAddress() {}

function UserZipcode() {}

var _new_user_details = new UserDetails();
console.log('UserDetails', UserDetails);
console.log('_new_user_details', _new_user_details);
console.log('_userdesignation', _userdesignation);