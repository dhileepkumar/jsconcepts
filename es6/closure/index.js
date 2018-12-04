/* closure */

/* 
    outer lexical variable
    variables 
    -> _user_designation
    -> _user_name
*/
let _user_designation ="Web Designer",
    _user_name = "Dhileep";

function user_name(first_name="First Name", last_name="Last Name"){
    /*  Inner Lexical Environment 
        variables
            -> first_name
            -> last_name
            -> _user_name // for user name first the function look for variables inside the function if the not available it lookes outside the function
    */

   
    var _user_name = (first_name, last_name) => first_name+' '+last_name;
    return {
        user_name : _user_name(first_name, last_name),
        user_designation : _user_designation
    };

 
}


_user_designation = "Software Developer";
let _user_details = user_name("dhileep");
console.log('_user_details',_user_details);
console.log('_user_details',_user_name);