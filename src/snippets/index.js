function FindNumber(n) {
    let _divisor = 2;
    while (n > _divisor) {
        if (n % _divisor == 0) {
            return false;
        } else {
            _divisor++;
        }
    }
    return true;
} /* using class method */
class FindCurrentNumber {
    constructor() {
        this.divisor_name = 2;
    }
    getNumber(n) {
        var _get_number = this.divisor_name;

        while (n > _get_number) {
            if (n % _get_number == 0) {
                return false;
            } else {
                _get_number++;
            }
        }
        return true;
    }
}

/* Using Prototype method */
function FindNumberProto() {
    this.divisor_name = 2;
}

FindNumberProto.prototype.getnumber = n => {
    for (var i = 2; n > i; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};

//FindNumberProto.prototype.getnumber.prototype = new FindNumberProto();

var _find_prime_numebr = new FindCurrentNumber();
console.log('_find_prime_numebr', _find_prime_numebr);

var _find_prime_numebr_proto = new FindNumberProto();
console.log('_find_prime_numebr 1', _find_prime_numebr);
console.log('_find_prime_numebr', _find_prime_numebr_proto.getnumber(135));