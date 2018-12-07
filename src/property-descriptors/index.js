//"use strict"
let user = {
    name: "John"
};

let _user = ["John", "vijay", "dhileep"];

/*
    get the flages (Propery Description ) we can use Object.getOwnPropertyDescriptor
    this get property descriptor values
    -> writable 
    -> Enumerable
    -> COnfigurable

    Object.getOwnPropertyDescriptor will display following Information

    -> {
            configurable: true
            enumerable: true
            value: "John"
            writable: true
      }

*/

let _property_description = Object.getOwnPropertyDescriptor(user, "name");
console.log('user', _property_description);

/* 
    To change the flags we can use : Object.defineProperty 
    if a property is assigned to the object using defineProperty 

    ->Writable
    ->Enumerable
    ->Configurable 
    
    will be false. so this propery value can be changed
    
*/
_property_description = Object.defineProperty(user, "email", {
    value: "dhileepkumarit@gmail.com"
});
_property_description = Object.getOwnPropertyDescriptor(user, "email");
user.email = "wer";
console.log('user', user);

/*  
    Non enumerable object 
    Non enumerable object will not apper in loops
*/

for (key in user) {
    console.log('key', key);
}

/* 
    Changing email to enumerable object 
*/

// Object.defineProperty(user,"email", {
//     enumerable:true
// })


for (key in user) {
    console.log('key', key);
}

for (let key of _user) {
    console.log('key', key);
}

let _new_value = Object.assign({}, user, _user);
console.log('_new_value', _new_value);

/* difining Multiple Properties to the object */
Object.defineProperties(user, {
    designation: {
        value: "Web Desination",
        writable: true,
        enumerable: true,
        configurable: true
    },
    mobile: {
        value: "7358819848",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
for (key in user) {
    console.log('user key', key);
}
console.log('user', user);

/* get Property Descriptor for all property in the object */
let _all_property_descitor = Object.getOwnPropertyDescriptors(user);
console.log('_all_property_descitor', _all_property_descitor);

/* 
    Sealing an object globally 
    Prevent Adding further properties to the object
*/

Object.preventExtensions(user);
user.address = "123";
console.log('preventExtensions', user);

/*
    
*/