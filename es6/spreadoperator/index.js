var _new_array = [11,2,3,4],
    _new_array_1 = [6,7,8],
    _final_array='';

_final_array = [10, ..._new_array_1, ..._new_array];

function getArrayLimit(_array_value){
    if(_array_value>10){
        return _array_value;
    }
}

/* array Filter */
var _final_array_1 = _final_array.filter((values)=>getArrayLimit(values));


console.log('_new_array', _final_array_1)
console.log('max_number', Math.max(..._final_array));
console.log('min_number', Math.min(_new_array_1)); // this won't work becouse max and min expect list of numeric arguments 
console.log('min_number', Math.min(..._final_array));