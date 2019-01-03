/* Numbers 
   -> Nubmber and Method to access number
*/
let _text_nuber = 1000000;
_text_nuber = 1e9; /*
                   ->Short hand number conversion
                   -> e - Represents Number of zeros
                   */

/*  Using Constructor Method  */
let _text_nubmer = new Number(_text_nuber);

/* following function returns only true or false */
let _finite_check = Number.isFinite(_text_nuber); /* check number is finite */
let _interger_check = Number.isInteger(_text_nuber); /* check number is integer */
let _is_number = Number.isNaN(_text_nuber); /* checks given value is number of not */
let _is_safeinteger = Number.isSafeInteger(_text_nuber); /* checks given value is 
                                                         -> exactly represented as an IEEE-754 double precision number, and
                                                         -> whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
                                                         */

console.log(' _text_nubmer ', _is_safeinteger);
console.log(' _text_nubmer ', _text_nubmer.__proto__);