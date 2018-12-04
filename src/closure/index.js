/* closure */

/* 
    outer lexical variable
    variables 
    -> _user_name
*/
let _user_name = "test";

function user_name(name = "test") {
    /*  Inner Lexical Environment 
        variables
            ->name
    */

    return display_user_name = name => {
        return name;
    };

    // return _user_name;
}

_user_name = "test 1";

let _user_details = user_name();
console.log('_user_details', _user_details(_user_name));