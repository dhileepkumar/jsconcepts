function userDetails(){
    return {
        name:"dhileep",
        email:"dhileepkumarit@gmail.com"
    }
}
/* object and array oinitiallized using contructor method */
let _object = new Object()
let _arry = new Array()


/* object and array oinitiallized using littral method */
let _object_l = {}
let _arry_l = []


/*  Functions */
function Protofunctions(){
    this.name="name";
    this.result="name";
}


console.log('_object', _object_l)
console.log('_arry', _arry_l)

_object.__proto__ = new userDetails();
console.log('_object', _object)
console.log('_arry', _arry)



let _main_details = new Protofunctions();
_arry.__proto__ = new userDetails()
_main_details.__proto__ = new userDetails()
console.log('Protofunctions', _main_details)
console.log('Protofunctions', _arry)